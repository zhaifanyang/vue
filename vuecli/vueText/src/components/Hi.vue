<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Hi is a vue page!'
    }
  }
}
</script>

<style scoped>

</style>
