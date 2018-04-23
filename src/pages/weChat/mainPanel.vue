<template>
  <div class="container-fluid" style="padding: 0;">
    <div class="row" style="margin: 0;">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-lg-offset-3 chat-panel">
        <div class="row header">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {{title}}
            <span class="glyphicon glyphicon-search" v-if="isShowSearch"></span>
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
              <li ref="bar" v-for="(bars, key) in barControlList" :key="key" @click="toggleBar(key)">
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
import message from '@/pages/weChat/message'
import contacts from '@/pages/weChat/contacts'
import settings from '@/pages/weChat/settings'

export default {
  name: 'MainPanel',
  data () {
    return {
      title: '消息',
      isShowSearch: false,
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
    this.$refs.bar[0].style.background = 'radial-gradient(circle at center, #333, #272727)'
  },
  methods: {
    toggleBar (index) {
      let icons = this.$refs.icons
      for (let i = 0; i < icons.length; i++) {
        icons[i].src = this.barControlList[i].icon
        this.barControlList[i].isShow = false
        this.$refs.bar[i].style.background = '#2E3238'
      }
      if (index === 1) {
        this.isShowSearch = true
      } else {
        this.isShowSearch = false
      }
      // 更改标题文字
      this.title = this.barControlList[index].text
      // 更改点击图片
      icons[index].src = '/static/' + this.icons[index]
      // 更改点击的歼击背景颜色
      this.$refs.bar[index].style.background = 'radial-gradient(circle at center, #333, #272727)'
      // 显示点击的组件
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
  overflow: hidden;
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
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.container-fluid > .row > .chat-panel .header .glyphicon-search {
  position: absolute;
  right: 14px;
  cursor: pointer;
}
.container-fluid > .row > .chat-panel .content {
  background: #fff;
  height: 83%;
  overflow-y: scroll;
}
.container-fluid > .row > .chat-panel .footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background: linear-gradient(left top, #4F4F4F, #272727);
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
  border-right: 1px solid #666;
  cursor: pointer;
}
.container-fluid > .row > .chat-panel .footer .bar-control li:last-child {
  border: none;
}
@media screen and (max-width: 768px){
  .container-fluid {
    background: #fff;
  }
  .container-fluid > .row > .chat-panel {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .container-fluid > .row > .chat-panel .header {
    border-top-left-radius: 0px;
  }
}
@media screen and (min-width: 900px){
 .container-fluid > .row > .chat-panel .content {
   height: 86%;
 }
}
</style>
