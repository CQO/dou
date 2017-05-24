<template>
  <div class="title-bar-box">
    <div class="left-item">
      <div class="avatar">
        <div class="state"></div>
      </div>
      <div class="bar-item is-active">消息</div>
      <div class="bar-item">通讯录</div>
      <div class="bar-item">应用</div>
    </div>
    <div class="right-item">
      <div class="icon column" v-on:click="columnClick">&#xe68d;</div>
    </div>
    <SidebarRight v-show="showSidebarRight"></SidebarRight>
  </div>
</template>

<script>
import SidebarRight from '../Sidebar/Right'
export default {
  components: {
    SidebarRight
  },
  methods: {
    columnClick: function () {
      // console.log(this.$store.state.ui.rightColumnShow)
      // this.$store.commit('RIGHT_COLUMN_BUTTON_CLICK')
      // console.log(this.$store.state.ui.rightColumnShow)
      this.showSidebarRight = !this.showSidebarRight
    }
  },
  data () {
    return {
      showSidebarRight: false
    }
  }
}
</script>

<style scoped>
.left-item{
  display: flex;
}
.title-bar-box{
  background-color: #324157;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: Space-between;
}
.avatar{
  height: 45px;
  width: 45px;
  background-image:url(../../assets/header.png);
  background-repeat: round;
  margin: 2px;
  border-radius: 50%;
  position: relative;
}
.state{
  background-color: yellow;
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  right: 0;
  top: 0;
}
.bar-item{
  color: white;
  width: 100px;
}
.is-active{
  color: skyblue;
}
.column{
  width: 60px;
  text-align: center;
  color: white;
}
</style>
