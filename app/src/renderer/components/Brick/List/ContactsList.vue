<template>
  <div class="contacts-list">
    <img :src="imgUrl"></img>
    <div class="name">{{userName}}</div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    userName: String
  }
}
</script>

<style scoped>
.contacts-list{
  display: flex;
}
img{
  height: 45px;
  width: 45px;
}
.name{
  height: 45px;
  line-height: 45px;
}
</style>
