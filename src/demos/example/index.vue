<template>
  <div class="demo_wrap">
    <h1>获取当前时间</h1>
    <p><button @click="getDate">获取当前时间</button> {{ date }}</p>
    <textarea class="code_container" disabled rows="3">
var dme = require('dme')
var date = dme.date()
console.log(date)
    </textarea>
  </div>
</template>

<script>
  import dme from '../../'
  export default {
    data () {
      return {
        date: dme.date()
      }
    },
    methods: {
      getDate () {
        this.date = dme.date()
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