<template>
  <div class="demo_wrap markdown-body">
    <h2>是否是微信：</h2>
    <p>{{ isWx }}</p>
    <h2>是否是移动端：</h2>
    <p>{{ isWeb }}</p>
    <textarea class="code_container" disabled rows="3">
var dme = require('dme');
console.log(dme.isWx());
console.log(dme.isWeb());
    </textarea>
  </div>
</template>

<script>
  import dme from '../src'
  export default {
    data () {
      return {
        isWx: dme.isWx(),
        isWeb: dme.isWeb()
      }
    }
  }
</script>

<style lang="less">
  .demo_wrap {
    padding: 20px;
  }
  .code_container {
    width: 100%;
    padding: 10px;
    line-height: 1.6;
    overflow: hidden;
  }
</style>