<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p>{{$store.state.count}}</p>
    <p>{{count}}</p>
    <div>
      <button @click="$store.commit('add',10)">add</button>
      <button @click="reduce">reduce</button>
    </div>
    <button @click="add(5)">add</button>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/Vuex/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'Vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Vuex'
    }
  },
  computed:{
    ...mapState(['count']),
    // count(){
    //   return this.$store.getters.count
    // },
    ...mapGetters(['count'])
  },
  methods:{
      ...mapMutations([  
          'add','reduce'
      ]),
      ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
