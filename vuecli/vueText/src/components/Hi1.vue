<template>
	<div>
	  <h1>{{ msg }}-{{$route.params.name}}-{{$route.params.id}}</h1>
	</div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: '子路由h1!'
    }
  }
}
</script>

<style scoped>

</style>
