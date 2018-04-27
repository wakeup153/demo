<template>
  <div class="container-fluid">
    <div class="row head">
      <div class="col-xs-12 col-sm-12 col-md-offset-3 col-md-offset-6 col-lg-offset-3 col-lg-6">
        <ul class="menu">
          <li><a href="#">首 页</a></li>
          <li><a href="#">博 客</a></li>
          <li><a href="#">作 品</a></li>
          <li><a href="#">关 于</a></li>
        </ul>
      </div>
    </div>
    <div class="row content">
      <div class="col-md-offset-3 col-md-offset-6 col-lg-offset-3 col-lg-6">
        <h3>正在建设中……………………</h3>
        <!-- <button @click="login">登录</button> -->
      </div>
    </div>
    <div class="row footer">
      <div class="col-md-offset-3 col-md-offset-6 col-lg-offset-3 col-lg-6">
        <p>备案号:蜀ICP备17041387号-2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    HelloWorld: () => import('@/components/HelloWorld')
  },
  mounted () {
    // 向服务器订阅事件
    this.$sockets.on('loginSucess', val => {
      console.log(val)
    })
  },
  methods: {
    login () {
      // 触发服务器login事件
      this.$sockets.emit('login', {name: 'Jack'})
    }
  }
}
</script>
<style scoped>
.container-fluid {
  width: 100%;
  height: 100%;
  position: relative;
}
.container-fluid .head {
  background: rgb(0, 0, 0);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.container-fluid .head .menu {
  list-style: none;
}
.container-fluid .head .menu div * ,
.content div *,
.footer div *
{
  margin: 0;
  padding: 0;
}
.container-fluid .head .menu li {
  float: left;
  width: 80px;
  height: 3em;
  line-height: 3em;
  text-align: center;
}
.container-fluid .head .menu li:hover {
  background: rgb(78, 78, 78);
  cursor: pointer;
}
.container-fluid .head .menu li a {
  color: #fff;
}
.content {
  position: absolute;
  width: 100%;
  top: 3em;

}
.content div:first-child{
  min-height: 1200px;
  background: rgb(233, 232, 230);
}
.footer{
  background: rgb(12, 12, 12);
  position: absolute;
  top: calc(1200px + 3em);
  width: 100%;
  color: #fff;
  text-align: center;
}
</style>
