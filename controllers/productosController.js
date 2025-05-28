const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/productos.json');

async function getProductos(req, res) {
  try {
    const data = await fs.readFile(filePath);
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Error al leer productos' });
  }
}

async function createProducto(req, res) {
  try {
    const producto = req.body;
    const data = JSON.parse(await fs.readFile(filePath));
    producto.id = Date.now();
    data.push(producto);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    res.status(201).json(producto);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
}

async function updateProducto(req, res) {
  try {
    const id = parseInt(req.params.id);
    const nuevosDatos = req.body;
    const data = JSON.parse(await fs.readFile(filePath));
    const index = data.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });
    data[index] = { ...data[index], ...nuevosDatos };
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
}

async function deleteProducto(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = JSON.parse(await fs.readFile(filePath));
    const nuevoArray = data.filter(p => p.id !== id);
    await fs.writeFile(filePath, JSON.stringify(nuevoArray, null, 2));
    res.json({ mensaje: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
}

module.exports = {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto
};
