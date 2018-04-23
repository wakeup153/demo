<template>
  <ul class="message_list">
    <li v-for="(entries, key) in msgList" :key="key">
      <div class="m-details">
        <img :src="entries.headshot" width="36">
        <div>
          <p class="nickname">{{entries.nickname}}</p>
          <p class="receive-msg">{{entries.msg}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Message',
  data () {
    return {
      msgList: [
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.message_list {
  list-style: none;
}
.message_list li {
  height: 50px;
  border-bottom: 1.4px solid rgb(231, 229, 229);
  color: #111;
  position: relative;
  cursor: default;
}
.message_list li:hover {
  background: #e1e1e1;
}
.message_list li .m-details {
  position: absolute;
  width: 94%;
  height: 36px;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
.message_list li .m-details img {
  border-radius: 4px;
}
.message_list li .m-details div {
  display: inline-block;
  position: absolute;
  height: 36px;
  left: 45px;
}
.message_list li .m-details div p {
  margin: 0px;
  padding: 0px;
}
.message_list li .m-details div  .nickname {
  font-size: 0.8em;
}
.message_list li .m-details div  .receive-msg {
  font-size: 0.3em;
  color: #9999;
}
</style>
