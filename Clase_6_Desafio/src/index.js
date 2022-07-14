import express from 'express';
import ProductManager from './managers/productManager.js';

const app = express();
const productService = new ProductManager('src/data/products.json');

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

// Ruta para pedir todos los productos:
app.get('/productos', async (req, res) => {
  let products = await productService.getAll();
  console.log(products)
  res.send(products);
})

// Ruta para pedir un producto random:
app.get('/producto', async (req, res) => {
  let type = req.query.type
  if (!type) return res.send('Please provide a type parameter')
  if (type != 'random') return res.send('Error: type must be random');
  let products = await productService.getAll();
  let randomProduct = products[Math.floor(Math.random() * products.length)];
  res.send(randomProduct);
})
