<template>
  <div class="demo_wrap markdown-body">
    <h1>获取当前时间</h1>
    <p><button @click="getDate">获取当前时间</button> {{ date }}</p>
    <pre>
<code>var dme = require('dme')
var date = dme.date()
console.log(date)
</code>
    </pre>
  </div>
</template>

<script>
  import dme from '../src'
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
    pre {
      code {
        display: inline-block;
      }
    }
  }
  .code_container {
    width: 100%;
    padding: 10px;
    line-height: 1.6;
    overflow: hidden;
  }
</style>