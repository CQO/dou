<template>
<div class="main-box" :class="theme">
  <TitleBar></TitleBar>
  <Contents></Contents>
  <div class="switch" v-on:click="switchTheme">切换</div>
</div>
</template>
<script>
import TitleBar from './Title/Bar'
import Contents from './Content/Index'

export default {
  components: {
    TitleBar,
    Contents
  },
  methods: {
    switchTheme: function () {
      if (this.theme === 'base') this.theme = 'other'
      else this.theme = 'base'
    }
  },
  data () {
    return {
      theme: 'base'
    }
  }
}
</script>
<style>
.main-box{
  height: 100%;
  width: 100%;
  position: relative;
}
.switch{
  position: absolute;
  height: 45px;
  width: 45px;
  left: 20px;
  bottom: 20px;
  background-color: blue;
}
.main-box.other .title{
  background-color: green;
}
.main-box.other .content .group{
  background-color: skyblue;
}
</style>
