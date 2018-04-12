<template>
  <div class="container-fluid" style="margin: 0; padding: 0;">
    <!-- <login v-if="isShowLogin" @hideLogin="hideLogin"></login>
    <register v-if="isShowReg"></register> -->
    <panel></panel>
  </div>
</template>
<script>
export default {
  name: 'weChat',
  data () {
    return {
      isShowLogin: true,
      isShowReg: false
    }
  },
  created () {
    this.eventBus.$on('showLogin', val => {
      this.isShowLogin = val
      this.isShowReg = false
    })
  },
  methods: {
    hideLogin (val) {
      this.isShowReg = true
      this.isShowLogin = val
    }
  },
  components: {
    login: () => import('./login'),
    register: () => import('./register'),
    panel: () => import('./panel')
  }
}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  height: 100%;
  background: url('../../assets/bk.jpg') no-repeat center /100% 100%;
  position: relative;
}
</style>
