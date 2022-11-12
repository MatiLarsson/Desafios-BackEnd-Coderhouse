import ProductsService from "./products.service.js"
import UsersService from "./users.service.js"
import CartsService from "./carts.service.js"
import ChatsService from "./chats.service.js"

const persistance = 'MONGOATLAS'

let productsService
let cartsService
let usersService
let chatsService

switch(persistance) { // Usamos dinamic imports
  case "MEMORY":
    const {default: MemProd} = await import('../dao/MemoryDao/products.dao.js')
    productsService = new ProductsService(new MemProd())
    const {default: MemCart} = await import('../dao/MemoryDao/carts.dao.js')
    cartsService = new CartsService(new MemCart())
    const {default: MemUser} = await import('../dao/MemoryDao/users.dao.js')
    usersService = new UsersService(new MemUser())
    const {default: MemChat} = await import('../dao/MemoryDao/chats.dao.js')
    chatsService = new ChatsService(new MemChat())
    break
  case "FS":
    const {default: FSProd} = await import('../dao/FileSystemDao/products.dao.js')
    productsService = new ProductsService(new FSProd())
    const {default: FSCart} = await import('../dao/FileSystemDao/carts.dao.js')
    cartsService = new CartsService(new FSCart())
    const {default: FSUser} = await import('../dao/FileSystemDao/users.dao.js')
    usersService = new UsersService(new FSUser())
    const {default: FSChat} = await import('../dao/FileSystemDao/chats.dao.js')
    chatsService = new ChatsService(new FSChat())
    break
  case "MONGOATLAS":
    const {default: MonProd} = await import('../dao/MongoDao/products.dao.js')
    productsService = new ProductsService(new MonProd())
    const {default: MonCart} = await import('../dao/MongoDao/carts.dao.js')
    cartsService = new CartsService(new MonCart())
    const {default: MonUser} = await import('../dao/MongoDao/users.dao.js')
    usersService = new UsersService(new MonUser())
    const {default: MonChat} = await import('../dao/MongoDao/chats.dao.js')
    chatsService = new ChatsService(new MonChat())
    break
}

const services = {
  productsService,
  cartsService,
  usersService,
  chatsService
}

export default services