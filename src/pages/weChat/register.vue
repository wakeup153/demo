<template>
  <form class="form-horizontal col-xs-10 col-sm-10 col-md-10 col-lg-3" @submit.prevent="register">
    <h4>注册</h4>
    <div class="form-group">
      <label for="inputUname" class="control-label sr-only">用户名:</label>
      <div class="col-md-12">
        <input type="text" id="inputUname" v-model="users.nickname" name="userName" class="form-control" placeholder="请输入用户名">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword" class="control-label sr-only">密 码:</label>
      <div class="col-md-12">
        <input type="password" v-model="users.password" id="inputPassword" class="form-control" placeholder="请输入密码">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword2" class="control-label sr-only">密 码:</label>
      <div class="col-md-12">
        <input type="password" v-model="verifyPassword" id="inputPassword2" name="password" class="form-control" placeholder="确认密码">
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-12 error sr-only" style="color: red; text-indent: 4px;">
        用户名不能为空
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-12">
        <input type="submit" class="btn btn-default btn-block" value="立即注册">
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      isShow: true,
      users: {
        nickname: '',
        password: '',
        account: null,
        isLogin: 'N',
        loginDate: null,
        loginIp: '192.168.0.100'
      },
      verifyPassword: '', // 验证密码是否相同
      isExistsAccount: false // 账号是否存在
    }
  },
  created () {
    this.$socket.on('validateAccount', data => {
      if (data.length > 0) {
        this.isExistsAccount = true
      } else {
        this.isExistsAccount = false
      }
    })
  },
  methods: {
    register () {
      let account = this.randomAccount()
      this.$socket.emit('validateAccount', account)
      if (this.isExistsAccount) {
        account = this.randomAccount()
        this.$socket.emit('validateAccount', account)
      } else {
        this.users.account = account
        this.users.loginDate = new Date().toLocaleString()
        this.$socket.emit('addUser', this.users)
        alert('你的账号为: ' + account)
        this.eventBus.$emit('showLogin', true)
      }
      this.users.account = null
      this.users.nickname = ''
      this.users.password = ''
      this.verifyPassword = ''
    },
    // 随机分配账号
    randomAccount () {
      return parseInt(Math.random() * (9999999999 - 10000000) + 10000000)
    }
  }
}
</script>

<style scoped>
.form-horizontal {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px 10px;
  background: rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%);
  border-radius: 12px;
}
.form-group .eror {
  color: red;
}
</style>
