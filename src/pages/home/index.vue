<template>
  <div>
    <input type="text" v-model="messsage">
    <button @click="sendMessage">send</button>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState, mapActions} = createNamespacedHelpers('socket')
export default {
  name: 'Home',
  data () {
    return {
      id: null,
      messsage: ''
    }
  },
  sockets: {
    connect () {
      console.log('已连接')
    }
  },
  mounted () {
    this.id = this.$socket.id
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['increment']),
    sendMessage () {
      this.$socket.emit('message', this.messsage)
      this.messsage = ''
    }
  }
}
</script>
