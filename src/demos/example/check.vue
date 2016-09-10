<template>
  <div class="demo_wrap">
    <h1>是否是微信：</h1>
    <p>{{ isWx }}</p>
    <h1>是否是移动端：</h1>
    <p>{{ isWeb }}</p>
    <textarea class="code_container" disabled rows="3">
var dme = require('dme');
console.log(dme.isWx());
console.log(dme.isWeb());
    </textarea>
  </div>
</template>

<script>
  import dme from '../../'
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