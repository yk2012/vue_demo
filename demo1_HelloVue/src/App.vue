<template>
  <div>
    <img class="logo" src="./assets/logo.png">
    <!-- 3. 使用组件标签 -->
    <HelloWorld/>
  </div>
</template>

<script>
// 1. 引入组件
import HelloWorld from './components/HelloWorld'

export default {
  // 2. 映射组件标签
  components: {
    HelloWorld
  }
}
</script>

<style>
  .logo {
    width: 300px;
    height: 300px;
  }
</style>
