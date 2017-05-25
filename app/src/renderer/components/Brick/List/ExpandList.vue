<template>
  <div class="expand-list-box">
    <div class="list" v-on:click="showExpand = !showExpand">
      <div class="left">
        <div class="icon" v-html="icon"></div>
        <span>{{title}}</span>
      </div>
      <div class="right" v-bind:class="{ active: showExpand }">
        <svg t="1495644719748" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1677" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
          <path d="M218.703 908.422v-799.42c0-44.239 35.503-80.023 79.743-80.022 20.57 0 39.17 7.892 53.261 20.569l527.503 395.339c34.941 26.487 42.271 76.366 15.781 111.585-4.51 6.201-9.868 11.555-15.782 15.782l-533.131 399.857c-34.945 26.199-85.090 19.156-111.303-16.064-10.991-14.375-16.064-30.997-16.064-47.619v0z" p-id="1678" fill="#c8c9cc"></path>
        </svg>
      </div>
    </div>
    <div class="expand" v-show="showExpand"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    text: String
  },
  methods: {
    listClick: function () {
      // console.log(this.$store.state.ui.rightColumnShow)
      // this.$store.commit('RIGHT_COLUMN_BUTTON_CLICK')
      // console.log(this.$store.state.ui.rightColumnShow)
      this.showSidebarRight = !this.showSidebarRight
    }
  },
  data () {
    return {
      showExpand: false
    }
  }
}
</script>

<style>
.expand-list-box{
  position: relative;
  overflow: hidden;
}
.list{
  display: flex;
  justify-content: Space-between;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
}
.icon{
  color: #ffa490;
}
.expand-list-box span{
  color: #9e9ea1;
}
.expand{
  text-align: left;
  margin: 0 10px;
  line-height: 1.25rem;
  color: #717274;
  font-size: .9375rem;
}
.right{
  transition: All 0.4s ease-in-out;
  height: 40px;
  width: 40px;
}
.active{
  transform: rotate(90deg);
}
</style>
