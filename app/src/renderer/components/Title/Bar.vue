<template>
  <div class="title">
    <div class="left-item">
      <div class="avatar">
        <div class="state"></div>
      </div>
      <div>消息</div>
      <div>通讯录</div>
      <div>应用</div>
    </div>
  </div>
</template>

<style scoped>
.left-item{
  display: flex;
}
.title{
  background-color: #324157;
  height: 50px;
  line-height: 50px;
  display: flex;
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
</style>
