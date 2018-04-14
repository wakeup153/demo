<template>
  <ul class="message_list">
    <li v-for="(message, key) in 40" :key="key">{{message}}</li>
  </ul>
</template>
<script>
export default {
  name: 'Message'
}
</script>

<style scoped>
.message_list {
  list-style: none;
}
.message_list li {
  height: 50px;
  background: red;
  padding: 10px;
  border-bottom: 1px solid yellow;
}
</style>
