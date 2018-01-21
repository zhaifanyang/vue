<template>
  <div>
    <h1>{{ msg }}</h1>
    抱歉，页面不存在!
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Error 404!'
    }
  }
}
</script>

<style scoped>

</style>
