<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <button @click='GoBack'>回退</button>
    <button @click='GoTo'>前进</button>
    <button @click='GoHome'>返回首页</button>
    <transition name='fade' mode='out-in'>
      <router-view/>
    </transition>
    <transition name='fade' mode='out-in'>
    <router-view name='left' style='width: 50%;height: 200px;background-color: orange;float: left'/>
    </transition>
    <transition name='fade' mode='out-in'>
    <router-view name='right' style='width: 50%;height: 200px;background-color: skyblue;float: right'/>
    </transition>
    <p>导航:
      <router-link class='a' to="/pa/112/show this">params</router-link>
      <router-link class='a' to="/goparams/6666/change news">goparams</router-link>
      <router-link class='a' to='/'>首页</router-link>
      <router-link class='a' to='/reverse'>首页反转</router-link>
      <router-link class='a' to='/Hi'>Hi页面</router-link>
      <router-link class='a' :to="{name:'Hi1',params:{name:'chang',id:'666'}}">H1页面</router-link>
      <router-link class='a' :to="{name:'Hi2',params:{name:'zhang',id:'777'}}">H2页面</router-link>
      <router-link class='a' to='/Hi/hhhh/chen/122'>hhhh页面</router-link>
      <router-link class='a' to='/gohome'>返回首页</router-link>
      <router-link class='a' to='/213213'>开发中...</router-link>
    </p>
    <p>{{$route.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    GoBack:function(){
      this.$router.go(-1);
    },
    GoTo(){
      this.$router.go(1)
    },
    GoHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a{
  color: #42b983;
}
.fade-enter{
  opacity:0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .3s;
}
</style>
