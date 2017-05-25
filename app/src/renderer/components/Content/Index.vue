<template>
  <div class="content">
    <div class="group">
      <ExpandList class="item" icon="&#xe610;" title="我的好友">
        <ContactsList userName="张龙" imgUrl="http://myweb-10017157.cossh.myqcloud.com/2017/0525/111.png"></ContactsList>
        <ContactsList userName="胡东" imgUrl="http://myweb-10017157.cossh.myqcloud.com/2017/0525/111.png"></ContactsList>
        <ContactsList userName="阳光" imgUrl="http://myweb-10017157.cossh.myqcloud.com/2017/0525/111.png"></ContactsList>
        <ContactsList userName="山东省" imgUrl="http://myweb-10017157.cossh.myqcloud.com/2017/0525/111.png"></ContactsList>
        <ContactsList userName="坎坎坷坷" imgUrl="http://myweb-10017157.cossh.myqcloud.com/2017/0525/111.png"></ContactsList>
      </ExpandList>
    </div>
    <div class="mess"></div>
  </div>
</template>

<script>
import ExpandList from '../Brick/List/ExpandList'
import ContactsList from '../Brick/List/ContactsList'
export default {
  components: {
    ExpandList,
    ContactsList
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
  background-color: #eef1f6;
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
