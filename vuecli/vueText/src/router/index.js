import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import left from '@/components/left'
import right from '@/components/right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:left,
        right:right
      }
    },{
      path: '/reverse',
      name: 'World',
      components: {
        default:HelloWorld,
        left:right,
        right:left
      }
    },{
      path: '/Hi',
      name: 'Hi',
      component: Hi,
      children:[
      	{
			path: 'Hi1',
	      	name: 'Hi1',
			component: Hi1
      	},{
			path: 'Hi2',
	      	name: 'Hi2',
			component: Hi2
      	}
      ]
    }
  ]
})
