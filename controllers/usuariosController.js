const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/usuarios.json');

async function getUsuarios(req, res) {
  try {
    const data = await fs.readFile(filePath);
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Error al leer usuarios' });
  }
}

async function createUsuario(req, res) {
  try {
    const usuario = req.body;
    const data = JSON.parse(await fs.readFile(filePath));
    usuario.id = Date.now();
    data.push(usuario);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
}

async function updateUsuario(req, res) {
  try {
    const id = parseInt(req.params.id);
    const nuevosDatos = req.body;
    const data = JSON.parse(await fs.readFile(filePath));
    const index = data.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ error: 'Usuario no encontrado' });
    data[index] = { ...data[index], ...nuevosDatos };
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
}

async function deleteUsuario(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = JSON.parse(await fs.readFile(filePath));
    const nuevoArray = data.filter(u => u.id !== id);
    await fs.writeFile(filePath, JSON.stringify(nuevoArray, null, 2));
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
}

module.exports = {
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario
};
