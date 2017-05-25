<template>
  <div class="sidebar-right">
    <Banners>try to be helpful</Banners>
    <UserDetails class="item" imgUrl="http://myweb-10017157.cossh.myqcloud.com/2017/0525/111.png" userName="Slackbot" details="Friendly bot, part-time programmer, and Help Center assistant-in-training."></UserDetails>
    <ExpandList class="item" icon="&#xe652;" title="Pinned Items">No items have been pinned yet! Open the context menu on important messages or files and choose Pin to this conversation … to stick them here.</ExpandList>
    <ExpandList class="item" icon="&#xe610;" title="Shared Files">There are no files to see here right now! But there could be – drag and drop any file into the message pane to add it to this conversation.</ExpandList>
  </div>
</template>

<script>
import Banners from '../Brick/Banners'
import UserDetails from '../Brick/Details/Sidebar/UserDetails'
import ExpandList from '../Brick/List/ExpandList'
export default {
  components: {
    Banners,
    UserDetails,
    ExpandList
  }
}
</script>

<style scoped>
.sidebar-right{
  border-left: 1px solid #e8e8e8;
  position: absolute;
  width: 200px;
  top: 50px;
  height: calc(100% - 50px);
  right: 0;
  background-color: white;
}
.sidebar-right .item{
  border-bottom: 1px solid #e8e8e8;
}
</style>
