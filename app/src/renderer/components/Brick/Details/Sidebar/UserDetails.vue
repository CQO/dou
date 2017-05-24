<template>
  <div class="user-details-box">
    <div class="img-box">
      <img :src="imgUrl"></img>
    </div>
    <div class="details-box">
      <div class="user-name">{{userName}}</div>
      <div class="details">{{details}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    userName: String,
    details: String
  }
}
</script>

<style>
.user-details-box{
  display: flex;
  padding: 5px;
  background-color: white;
  position: relative;
}
.img-box{
  width: 72px;
  height: 100%;
}
.details-box{
  width: calc(100% - 72px);
  height: 100%;
}
.user-name{
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  text-align: left;
  font-weight: 700;
  color: #e8e8e8;
}
.details-box{
  line-height: 20px;
  font-size: 12px;
}
</style>
