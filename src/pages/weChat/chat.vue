<template>
  <div class="chat">
    <div class="header">
      <p class="title">
        {{title}}
        <button class="btn btn-default" style="position: absolute; right: 10px;">关闭</button>
        </p>
    </div>
    <div class="content"></div>
    <div class="footer">
      <div class="message-control">
        <div class="inputMessage" contenteditable="true"></div>
        <button class="btn btn-default sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Chat',
  data () {
    return {
      title: '张三'
    }
  }
}
</script>

<style scoped>
.chat {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 7%;
  background-color: #3E3E3E;
  position: relative;
}
.header .title {
  color: #fff;
  font-size: 1.4em;
  display: inline-block;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  letter-spacing: 2px;
}
.header .title .btn {
  background: linear-gradient(rgb(84,84,84), rgb(39, 39, 39));
  outline: none;
  border: none;
  color: #fff;
}
.content {
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  background: #fff;
  position: relative;
}
.footer {
  width: 100%;
  height: 8%;
  background: linear-gradient(rgb(84,84,84), rgb(39, 39, 39));
  position: fixed;
  bottom: 0;
}
.message-control {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.message-control .inputMessage{
  display: inline-block;
  width: 70%;
  background: #fff;
  overflow: auto;
  height: 32px;
  padding: 5px;
}
.message-control .sendMessage {
  position: absolute;
  top: 0;
  right: 5px;
}
@media screen and (min-width: 996px){
  .chat {
    width: 996px;
    height: 800px;
    padding: 120px;
    margin: auto;
  }
  .message-control {
    width: 100%;
  }
  .message-control .inputMessage {
  width: 92%;
  resize: none;
  height: 32px;
  padding: 5px 10px;
  border-radius: 6px;
  margin-left: 10px;
}
  .header {
  width: 996px;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  }
  .content {
  width: 996px;
  height: 680px;
  background-color: rgba(255, 255, 255, 0.6);
  overflow-y: auto;
  }
  .footer {
  width: 996px;
  height: 60px;
  top: 820px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  }
}
</style>
