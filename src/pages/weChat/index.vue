<template>
  <div class="container-fluid" style="margin: 0; padding: 0;">
    <login v-if="isShowLogin" @hideLogin="hideLogin"></login>
    <register v-if="isShowReg"></register>
    <!-- <panel v-if="isShoPanel"></panel> -->
    <chat v-if="isShowChat"></chat>
    <main-panel v-if="isShowPanel"></main-panel>
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
      isShowPanel: false,
      isShowChat: false
    }
  },
  created () {
    this.eventBus.$on('showLogin', val => {
      this.isShowLogin = val
      this.isShowReg = false
    })
    this.eventBus.$on('showPanel', () => {
      this.isShowLogin = false
      this.isShowPanel = true
    })
    this.eventBus.$on('showChat', () => {
      this.isShowPanel = false
      this.isShowChat = true
    })
    this.eventBus.$on('returnMainPanel', () => {
      this.isShowPanel = true
      this.isShowChat = false
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
  background: url('/static/bk.jpg') no-repeat center /100% 100%;
  position: relative;
}
</style>
