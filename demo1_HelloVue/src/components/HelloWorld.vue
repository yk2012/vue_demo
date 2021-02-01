<template>
  <div class="hello">
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
export default { //配置对象（与Vue一致）
  data () { // 必须写函数
    return {
      msg: 'Hello Vue Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg {
    color: red;
    font-size: 50px;
  }
</style>
