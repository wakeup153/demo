<template>
  <div class="container-fluid" style="padding: 0;">
    <div class="row" style="margin: 0;">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-lg-offset-3 chat-panel">
        <div class="row header">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span class="glyphicon glyphicon-menu-left" @click="showPanel"></span>
            {{title}}
          </div>
        </div>
        <div class="row content" ref="contentBox">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" ref="msgBox">
            <div class="msg-container" :class="{msg_sender: items.isSend}" v-for="(items, key) in chatMsg" :key="key">
              <img :src="items.headshot" class="chat_head" width="34">
              <p class="chat_nick">{{items.nickName}}</p>
              <p class="msg_content">{{items.msg}}</p>
            </div>
          </div>
        </div>
        <div class="row footer">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <textarea class="message" rows="1" @keyup.enter="sendMsg($event)" v-model="msg"></textarea>
            <!-- <input class="message" type="text" @keyup.enter="sendMsg"> -->
            <span class="glyphicon glyphicon-picture"></span>
            <span class="glyphicon glyphicon-facetime-video"></span>
            <input class="sendImg" accept="image/*" type="file">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('socketStore')
export default {
  name: 'MainPanel',
  data () {
    return {
      title: '张三',
      senderHeadshot: '/static/ec560722511c5c1c!400x400_big.jpg',
      receiverHeadshot: '/static/5c4158249f09e37b!400x400_big.jpg',
      receiver: null,
      msg: '',
      chatMsg: [
        {
          nickName: 'ben',
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          msg: 'abcaaaaaaaaaaaaaaaaaaaaaaaa',
          time: '2017-10-11',
          isSend: false
        },
        {
          nickName: '张三',
          headshot: '/static/5c4158249f09e37b!400x400_big.jpg',
          msg: 'abcaaaaa',
          time: '2017-10-11',
          isSend: false
        },
        {
          nickName: 'ben',
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          msg: 'abcaaaaa',
          time: '2017-10-11',
          isSend: true
        },
        {
          nickName: '张三',
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          msg: 'abcaaaaa',
          time: '2017-10-11',
          isSend: false
        },
        {
          nickName: 'ben',
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          msg: 'abcaaaaa',
          time: '2017-10-11',
          isSend: true
        },
        {
          nickName: '张三',
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          msg: 'abcaaaaa',
          time: '2017-10-11',
          isSend: false
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'personInfor'
    ])
  },
  mounted () {
    this.receiver = this.personInfor
    this.title = this.receiver.nickname
    console.log(this.receiver)
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
    },
    sendMsg (evt) {
      this.chatMsg.push({
        nickName: this.title,
        headshot: this.senderHeadshot,
        msg: this.msg.trim(),
        time: '2017-10-11',
        isSend: true
      })
      this.msg = ''
    },
    showPanel () {
      this.eventBus.$emit('returnMainPanel')
    }
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
.container-fluid > .row > .chat-panel .header div {
  position: relative;
  overflow: hidden;
}
.container-fluid > .row > .chat-panel .header .glyphicon-menu-left {
  position: absolute;
  left: 14px;
  cursor: pointer;
}
.container-fluid > .row > .chat-panel .content {
  height: 88%;
  background: rgb(248, 243, 243);
  overflow-y: scroll;
  color: #222;
}
.container-fluid > .row > .chat-panel .content  .msg-container {
  margin: 16px 0;
  padding:0 10px;
}
.container-fluid > .row > .chat-panel .content  .msg-container .chat_head {
  float: left;
  margin-right: 10px;
  border-radius: 4px;
}
.container-fluid > .row > .chat-panel .content  .msg-container .chat_nick {
  margin-bottom: 10px;
}
.container-fluid > .row > .chat-panel .content  .msg-container .msg_content {
  display: inline-block;
  word-break: break-all;
  margin-left: 40px;
  max-width: 90%;
  max-height: 50%;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: rgb(6, 224, 53);
}
.container-fluid > .row > .chat-panel .content  .msg_sender {
  text-align: right;
}
.container-fluid > .row > .chat-panel .content  .msg_sender .chat_head {
  float: right;
  margin-left: 10px;
}
.container-fluid > .row > .chat-panel .content  .msg_sender .chat_nick {
  text-align: right;
}
.container-fluid > .row > .chat-panel .content  .msg_sender .msg_content {
  text-align: left;
  margin-right: 40px;
}
.container-fluid > .row > .chat-panel .footer {
  position: fixed;
  color: #222;
  width: 100%;
  bottom: 0;
  height: 6.6%;
  border-top: 1px solid rgb(233, 230, 230);
  background: #f0eded;
}

.container-fluid > .row > .chat-panel .footer > div {
  /* position: relative; */
  top: 50%;
  transform: translateY(-50%);
}
.container-fluid > .row > .chat-panel .footer .message {
  /* display: inline-block; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2%;
  width: 78%;
  height: 30px;
  line-height: 30px;
  resize: none;
  outline: none;
  border: none;
  border-radius: 5px;
}
.container-fluid > .row > .chat-panel .footer .glyphicon {
  float: right;
  margin-right: 8px;
  color: rgb(173, 171, 171);
  cursor: pointer;
}
.container-fluid > .row > .chat-panel .footer div .sendImg {
  position: absolute; right: 10px; top: -5px;width: 20px; height: 5px; opacity: 0;
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
    border-top-right-radius: 0px;
  }
}
@media screen and (min-width: 900px){
 .container-fluid > .row > .chat-panel .footer .message {
   width: 90%;
 }
}
</style>
