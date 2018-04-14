<template>
  <ul class="friends_list">
    <li v-for="(items, key) in friends" :key="key">
      <div class="friends_title" :style="{backgroundImage: 'url(' + items.headshot + ')'}"></div>
      <div class="friends_name">
        <p>{{items.name}}</p>
        <p>{{items.signature}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Friends',
  data () {
    return {
      friends: [
        {
          name: 'Jack',
          socketId: '#fffff',
          headshot: '/static/img.jpg',
          signature: '这个人很懒,什么也没留下……'
        },
        {
          name: 'Rose',
          socketId: '#fffff',
          headshot: '/static/tab_icon_contact.png',
          signature: '这个人很懒,什么也没留下……'
        },
        {
          name: 'Ben',
          socketId: '#fffff',
          headshot: '/static/tab_icon_contact.png',
          signature: '这个人很懒,什么也没留下……'
        }
      ]
    }
  }
}
</script>

<style scoped>
.friends_list {
  list-style: none;
  width: 100%;
}
.friends_list li {
  padding: 10px 15px;
  border-top: 1px solid #999;
  position: relative;
  cursor: pointer;
}
.friends_title {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
}
.friends_list li .friends_name {
  display: inline-block;
  height: 50px;
  /* position: absolute;
  top: 0;
  left: 70px; */
}
</style>
