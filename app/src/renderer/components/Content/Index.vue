<template>
  <div class="content">
    <div class="group">
      <Channel></Channel>
    </div>
    <div class="mess"></div>
  </div>
</template>

<script>
import Channel from '../Brick/List/Channel'
export default {
  components: {
    Channel
  }
}
</script>

<style scoped>
.content{
  height: calc(100% - 50px);
  width: 100%;
  background-color: blue;
  display: flex;
}
.group{
  width: 30%;
  height: 100%;
  background-color: #4d394b;
}
.mess{
  width: 70%;
  height: 100%;
  background-color: white;
}
.group .expand-list-box .list{
  background-color: gainsboro;
}
</style>
