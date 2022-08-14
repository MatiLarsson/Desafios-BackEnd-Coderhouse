import express from 'express'
import __dirname from './__dirname.js'
import indexRouter from './routes/index.js'
import { Server } from 'socket.io'
import ChatManager from './managers/chatManager.js'
// import ProductManager from './managers/productManager.js'

// const productsService = new ProductManager()
// productsService.deleteAll()
const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})
const io = new Server(server)

app.set('socketio', io)

const chatsService = new ChatManager()

io.on('connection', async (socket) => {
  console.log('a user connected')
  socket.emit('fetchProducts')
  socket.emit('log', await chatsService.getAll())
  socket.broadcast.emit('newUser', socket.id)
  socket.on('message', async (data) => {
    await chatsService.save(data)
    io.emit('log', await chatsService.getAll())
  })
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use('/', indexRouter);
