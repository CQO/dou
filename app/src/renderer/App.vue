<template>
  <div id="app" class="box">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
html,body { 
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 307699 */
  src: url('//at.alicdn.com/t/font_ryznjvai5udcayvi.eot');
  src: url('//at.alicdn.com/t/font_ryznjvai5udcayvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_ryznjvai5udcayvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_ryznjvai5udcayvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_ryznjvai5udcayvi.svg#iconfont') format('svg');
}
.icon{
  font-family: "iconfont";
  font-style: normal;
  font-weight: normal;
  display: inline-block;
}
.box{
  height: 100%;
  width: 100%;
  position: relative;
}
a{ text-decoration:none; }
body {
  align-items: center;
  background:
    radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      rgba(229, 229, 229, .85) 100%
    );
  background-position: center;
  display: flex;
  font-family: Lato, Helvetica, sans-serif;
  justify-content: center;
  text-align: center;
}
</style>
