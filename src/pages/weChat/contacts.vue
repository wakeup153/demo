<template>
  <ul class="contacts-list">
  <li v-for="(contacts, key) in contacts" :key="key" @click="sendMessage(key)">
    <div class="contacts-container">
      <img :src="contacts.headshot" width="36">
      <span class="nickname">{{contacts.nickname}}</span>
    </div>
  </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('socketStore')
export default {
  name: 'Contacts',
  data () {
    return {
      contacts: [
        {
          sid: 1,
          headshot: '/static/5c4158249f09e37b!400x400_big.jpg',
          nickname: '张三',
          msg: 'hello'
        },
        {
          sid: 2,
          headshot: '/static/6f5c99b7f42acf8e!400x400_big.jpg',
          nickname: '李四',
          msg: 'hello'
        },
        {
          sid: 3,
          headshot: '/static/45fe855ea13c2ef6!400x400_big.jpg',
          nickname: '王五',
          msg: 'hello'
        }
      ]
    }
  },
  created () {
    // this.$socket.emit('allContacts')
    this.$socket.on('onlineUser', (users) => {
      console.log(users)
    })
    // console.log(this.$socket)
  },
  methods: {
    ...mapActions([
      'updateInfor'
    ]),
    sendMessage (val) {
      this.eventBus.$emit('showChat')
      this.updateInfor(this.contacts[val])
    }
  }
}
</script>
<style>
.contacts-list {
  color: #111;
  font-size: 0.9em;
}
.contacts-list li {
  border-bottom: 1px solid rgb(231, 229, 229);
  height: 50px;
  position: relative;
}
.contacts-list li:hover {
  background: #e1e1e1;
}
.contacts-list li .contacts-container {
  padding: 0 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8em;
}
</style>
