<template>
	<div>
		<h1>{{ msg }}-{{$route.params.name}}-{{$route.params.id}}</h1>
	</div>
</template>

<script>
export default {
  name: 'Hi2',
  data () {
    return {
      msg: '子路由h2!'
    }
  }
}
</script>

<style scoped>

</style>
