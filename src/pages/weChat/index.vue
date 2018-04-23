<template>
  <div class="container-fluid" style="margin: 0; padding: 0;">
    <login v-if="isShowLogin" @hideLogin="hideLogin"></login>
    <register v-if="isShowReg"></register>
    <!-- <panel v-if="isShoPanel"></panel> -->
    <!-- <chat></chat> -->
    <!-- <main-panel></main-panel> -->
  </div>
</template>
<script>
import mainPanel from './mainPanel'
export default {
  name: 'weChat',
  data () {
    return {
      isShowLogin: true,
      isShowReg: false,
      isShoPanel: true
    }
  },
  created () {
    this.eventBus.$on('showLogin', val => {
      this.isShowLogin = val
      this.isShowReg = false
    })
    this.eventBus.$on('showPanel', () => {
      this.isShowLogin = false
      this.isShoPanel = true
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
    chat: () => import('./chat'),
    mainPanel
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
