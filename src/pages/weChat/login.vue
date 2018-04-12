<template>
  <form class="form-horizontal col-xs-11 col-sm-11 col-md-10 col-lg-3"  @submit.prevent="login">
    <h4>登录</h4>
    <div class="form-group">
      <label class="sr-only" for="account"></label>
      <div class="col-lg-12">
        <input type="text" id="account" class="form-control" maxlength="16" placeholder="输入账号/用户名">
      </div>
    </div>
    <div class="form-group">
      <label for="password" class="sr-only"></label>
      <div class="col-lg-12">
        <input type="password" id="password" class="form-control" maxlength="16" placeholder="输入密码">
      </div>
    </div>
    <div class="from-group sr-only">
      <div class="col-lg-12">
        <p>密码错误</p>
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="checkbox">
          <label>
            <input type="checkbox">记住密码
          </label>
        </div>
      </div>
      <div class="col-lg-6 col-sm-6 col-xs-6">
        <div class="forgotPassword">
          <a href="#">忘记密码?</a>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-12">
        <input type="submit" class="btn btn-default btn-block" value="登 录">
      </div>
    </div>
    <div class="from-group">
      <div class="col-lg-12">
        <div class="registAccount col-lg-offset-7 col-md-offset-0">
          还没账号？<a href="#" @click.prevent="userRegister">立即注册</a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'weChat',
  data () {
    return {
    }
  },
  methods: {
    userRegister () {
      // 隐藏父组件
      this.$emit('hideLogin', false)
    },
    login () {
      this.eventBus.$emit('showPanel')
    }
  }
}
</script>

<style scoped>
.form-horizontal {
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(255, 255, 255, 0.6);
  padding: 16px;
  transform: translate(-50%, -50%);
  border-radius: 12px;
}
.forgotPassword {
  min-height: 27px;
  position: relative;
}
.forgotPassword a {
  position: absolute;
  bottom: 0;
  right: 20px;
}
</style>
