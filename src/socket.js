// 引入 socket.io
import socketio from 'socket.io-client'
// 连接服务器
const io = socketio('http://127.0.0.1:8989')

export default io
