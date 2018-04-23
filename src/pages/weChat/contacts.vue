<template>
  <ul class="contacts-list">
  <li v-for="(contacts, key) in contactsList" :key="key">
    <div class="contacts-container">
      <img :src="contacts.headshot" width="36">
      <span class="nickname">{{contacts.nickname}}</span>
    </div>
  </li>
  </ul>
</template>

<script>
export default {
  name: 'Contacts',
  data () {
    return {
      contactsList: [
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
        },
        {
          sid: 4,
          headshot: '/static/57d03cca7792f6e9!400x400_big.jpg',
          nickname: 'LEO',
          msg: 'hello'
        },
        {
          sid: 5,
          headshot: '/static/3361881f605ec7c0!400x400_big.jpg',
          nickname: 'Jack',
          msg: 'hello'
        },
        {
          sid: 6,
          headshot: '/static/836364674e170a60!400x400_big.jpg',
          nickname: 'rose',
          msg: 'hello'
        },
        {
          sid: 7,
          headshot: '/static/de655590056bb200!400x400_big.jpg',
          nickname: 'ben',
          msg: 'hello'
        },
        {
          sid: 8,
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          nickname: 'helun',
          msg: 'hello'
        },
        {
          sid: 9,
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          nickname: '小白',
          msg: 'hello'
        },
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
        },
        {
          sid: 4,
          headshot: '/static/57d03cca7792f6e9!400x400_big.jpg',
          nickname: 'LEO',
          msg: 'hello'
        },
        {
          sid: 5,
          headshot: '/static/3361881f605ec7c0!400x400_big.jpg',
          nickname: 'Jack',
          msg: 'hello'
        },
        {
          sid: 6,
          headshot: '/static/836364674e170a60!400x400_big.jpg',
          nickname: 'rose',
          msg: 'hello'
        },
        {
          sid: 7,
          headshot: '/static/de655590056bb200!400x400_big.jpg',
          nickname: 'ben',
          msg: 'hello'
        },
        {
          sid: 8,
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          nickname: 'helun',
          msg: 'hello'
        },
        {
          sid: 9,
          headshot: '/static/ec560722511c5c1c!400x400_big.jpg',
          nickname: '小白',
          msg: 'hello'
        }
      ]
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
