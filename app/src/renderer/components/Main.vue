<template>
<div class="main-box">
  <TitleBar></TitleBar>
  <Contents></Contents>
</div>
</template>
<script>
import TitleBar from './Title/Bar'
import Contents from './Content/Index'
export default {
  components: {
    TitleBar,
    Contents
  }
}
</script>
<style>
.main-box{
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
