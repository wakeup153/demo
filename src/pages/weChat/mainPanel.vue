<template>
  <div class="container-fluid" style="padding: 0;">
    <div class="row" style="margin: 0;">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-lg-offset-3 chat-panel">
        <div class="row header">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {{title}}
          </div>
        </div>
        <div class="row content">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <message v-if="barControlList[0].isShow"></message>
            <contacts v-if="barControlList[1].isShow"></contacts>
            <settings v-if="barControlList[2].isShow"></settings>
          </div>
        </div>
        <div class="row footer">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="list-unstyled bar-control">
              <li v-for="(bars, key) in barControlList" :key="key" @click="toggleBar(key)">
                <img :src="bars.icon" ref="icons" width="30"><br>
                {{bars.text}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import message from './message'
import contacts from './contacts'
import settings from './settings'

export default {
  name: 'MainPanel',
  data () {
    return {
      title: '消息',
      barControlList: [
        {
          text: '消息',
          icon: '/static/tab_icon_conversation.png',
          isShow: true
        },
        {
          text: '联系人',
          icon: '/static/tab_icon_contact.png',
          isShow: false
        },
        {
          text: '设置',
          icon: '/static/tab_icon_setup.png',
          isShow: false
        }
      ],
      icons: [
        'tab_icon_conversation_selected.png',
        'tab_icon_contact_selected.png',
        'tab_icon_setup_selected.png'
      ]
    }
  },
  mounted () {
    this.$refs.icons[0].src = '/static/' + this.icons[0]
  },
  methods: {
    toggleBar (index) {
      let icons = this.$refs.icons
      for (let i = 0; i < icons.length; i++) {
        icons[i].src = this.barControlList[i].icon
        this.barControlList[i].isShow = false
      }
      this.title = this.barControlList[index].text
      icons[index].src = '/static/' + this.icons[index]
      this.barControlList[index].isShow = true
    }
  },
  components: {
    message,
    contacts,
    settings
  }
}
</script>
<style scoped>
.container-fluid {
  color: #fff;
  font-size: 1.2em;
  letter-spacing: 2px;
}
.container-fluid > .row {
  position: relative;
  height: 100%;
}
.container-fluid .row {
  margin: 0;
}
.container-fluid .row  div[class^='col'] {
  padding: 0;
}
.container-fluid > .row > .chat-panel {
  height: 660px;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.container-fluid > .row > .chat-panel .header {
  background: #2E3238;
  text-align: center;
  padding: 10px 0;
}
.container-fluid > .row > .chat-panel .content {
  height: 91%;
  background: #fff;
  overflow-y: auto;
}
.container-fluid > .row > .chat-panel .footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #2E3238;
}
.container-fluid > .row > .chat-panel .footer .bar-control {
  height: 100%;
  width: 100%;
  text-align: center;
}
.container-fluid > .row > .chat-panel .footer .bar-control li {
  height: 100%;
  width: 33.333%;
  float: left;
  font-size: 0.8em;
  border-right: 1.6px solid #666;
  cursor: pointer;
}
.container-fluid > .row > .chat-panel .footer .bar-control li:last-child {
  border: none;
}
@media screen and (max-width: 768px){
  .container-fluid > .row > .chat-panel {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .container-fluid > .row > .chat-panel .header{
    padding: 6px;
  }
}
</style>
