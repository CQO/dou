<template lang="pug">
.login-box.box
  .login
    .input
      .username.input-box
        input(placeholder="用户名")
        .icon &#xe66b;
      .password.input-box
        input(placeholder="密码",type="password")
        .icon &#xe632;
    .operation
      span.remember
        input(type="checkbox",value="")
        |  记住密码
      span.option
        a(href="#") 忘记密码
        a(href="#") 注册
    .login-button 登录
</template>

<script>

</script>

<style lang='less' scoped>
.login-box{
  height: 100%;
  width: 100%;
  background-image:url(../assets/loginBackground.png);
}
.login{
  width: 260px;
  height: 180px;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute; top: 0; bottom: 0; left: 0; right: 0;   /*css溢出法*/
  margin: auto;
  padding: 50px 50px;
}
.input input{
  border: none;
  background: none;
  height: 35px;
  width: 240px;
  border: 1px solid #cccccc;
  margin: 5px auto;
  border-radius: 5px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 0.8rem;
}
.input-box{
  position: relative;
  .icon{
    top: 14px;
    color: #d5d5d5;
    font-size: 1.2rem;
    position: absolute;
    right: 10px;
  }
}
.operation{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 30px;
  color: #999;
  a{
    color: #999;
    margin: 0 2px;
  }
}
.login-button{
  height: 45px;
  background-color: #99CCFF;
  line-height: 45px;
  margin: 20px 0;
  border-radius: 5px;
  color: #CCFFFF;
  cursor: pointer;
}
</style>
