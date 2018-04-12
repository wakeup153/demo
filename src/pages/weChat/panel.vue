<template>
   <div class="container">
     <div class="header">
       <p class="title">{{title}}</p>
     </div>
     <div class="content">
     </div>
     <div class="footer">
       <ul class="nav_list">
         <li v-for="(items, key) in tabs" :key="key" @click="toggle(key)">
           <img ref="icon" :src="items.src" width="34">
           <span>{{items.text}}</span>
         </li>
       </ul>
     </div>
   </div>
</template>
<script>
export default {
  name: 'Panel',
  data () {
    return {
      title: '消息',
      tabs: [
        {
          text: '消息',
          src: '/static/tab_icon_conversation.png',
          color: 'red'
        },
        {
          text: '联系人',
          src: '/static/tab_icon_contact.png',
          color: 'yellow'
        },
        {
          text: '设置',
          src: '/static/tab_icon_setup.png',
          color: 'cyan'
        }
      ],
      imgList: [
        'tab_icon_conversation_selected.png',
        'tab_icon_contact_selected.png',
        'tab_icon_setup_selected.png'
      ]
    }
  },
  mounted () {
    this.$refs.icon[0].src = '/static/' + this.imgList[0]
  },
  methods: {
    toggle (index) {
      this.title = this.tabs[index].text
      // debugger
      let icon = this.$refs.icon
      for (let i = 0; i < icon.length; i++) {
        icon[i].src = this.tabs[i].src
      }
      icon[index].src = '/static/' + this.imgList[index]
    }
  }
}
</script>

<style>
.container {
  /* overflow: hidden; */
  width: 100%;
  height: 100%;
  padding: 0;
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
  background-color: #3E3E3E;
  position: fixed;
  bottom: 0;
}
.footer .nav_list {
  list-style: none;
  height: 100%;
  text-align: center;
}
.footer .nav_list li {
  float: left;
  width: 33.33%;
  height: 100%;
  color: #fff;
  border-right: 1px solid #666;
}
.footer .nav_list li:last-child {
  border-right: none;
}
.footer .nav_list li img {
  display: block;
  margin: auto;
}
@media screen and (min-width: 996px){
  .container {
    width: 996px;
    height: 800px;
    padding: 120px;
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
  background: #3E3E3E;
  top: 820px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  }
}
</style>
