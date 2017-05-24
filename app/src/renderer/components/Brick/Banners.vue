<template>
<transition name="fade">
  <div class="banners-box" v-show="show">
    
      <div class="text">
        <slot></slot>
        <img v-on:click="show=false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0UlEQVQ4T6WTwQ3CMAxFv0GCI90ENqAdBAlOsBInkDoIYQPYJFeQwMiJoiQ0Tg/tMc1/+fa3CRM/cvrd2YCwwmzR4XqwVeb+0uD7voHZoj91KWAL4FGFBDGwAeOO/th6gPz4vAyI1iokE/MT82Urbj1gDKKIRRYBGkTOpWZnO74c3s0BJYi/WRQPHZTLQell3UFwEWz7m2o65RLSmp1PPZ1hE/8bJoBKxHmMWrcrcxIHqRJVbU7yUS7knO1F6oTZ5LsAbsJ4ji6T9ARk4y5MWOkfM1+wEV2Uc1MAAAAASUVORK5CYII=" />
      </div>
    
  </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    switchTheme: function () {
      if (this.theme === 'base') this.theme = 'other'
      else this.theme = 'base'
    }
  }
}
</script>

<style scoped>
.banners-box{
  background-color: #f7f7f7;
  border-bottom: .0625rem solid #E8E8E8;
  position: relative;
  z-index: 50;
  padding: 8px 10px;
  font-family: sans-serif;
}
.banners-box .text{
  height: 20px;
  line-height: 20px;
  width: 100%;
  display: flex;
  justify-content: Space-between;
  text-align: left;
  overflow: hidden;
}
img{
  height: 14px;
  width: 14px;
  margin: 3px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity  0.8s
}
.fade-enter, .fade-leave-active {
  opacity : 0
}
</style>
