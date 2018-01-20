<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-view name='left' style='width: 50%;height: 200px;background-color: orange;float: left'/>
    <router-view name='right' style='width: 50%;height: 200px;background-color: skyblue;float: right'/>
    <p>导航:
      <router-link class='a' to='/'>首页</router-link>
      <router-link class='a' to='/reverse'>首页反转</router-link>
      <router-link class='a' to='/Hi'>Hi页面</router-link>
      <router-link class='a' :to="{name:'Hi1',params:{name:'chang',id:'666'}}">H1页面</router-link>
      <router-link class='a' :to="{name:'Hi2',params:{name:'zhang',id:'777'}}">H2页面</router-link>
    </p>
    <p>{{$route.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
