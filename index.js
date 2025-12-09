const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//      ENDPOINTS VETERINARIOS
// Insertar veterinario
app.post('/Veterinario', (req, res) => {
  console.log("Datos recibidos:", req.body); // <--- verifica que Angular envía algo
  const { nombre_completo, especialidad, telefono, correo, horario_disponible, anos_experiencia, cedula_profesional, observaciones, imagen } = req.body;

  const sql = `INSERT INTO Veterinarios (nombre_completo, especialidad, telefono, correo, horario_disponible, anos_experiencia, cedula_profesional, observaciones, imagen)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [nombre_completo, especialidad, telefono, correo, horario_disponible, anos_experiencia, cedula_profesional, observaciones,imagen];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error MySQL:", err); // <--- imprime el error exacto
      return res.status(500).json({ mensaje: "Error al insertar veterinario", error: err });
    }
    res.status(201).json({ mensaje: "Veterinario registrado correctamente", idGenerado: result.insertId });
  });
});


// Obtener todos los veterinarios
app.get('/getAllVeterinarios', (req, res) => {
  const sql = "SELECT * FROM Veterinarios";
  connection.query(sql, (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar veterinarios", error: err });
    res.status(200).json(result);
  });
});

// Obtener veterinario por ID
app.get('/getVeterinarioById/:id', (req, res) => {
  const sql = "SELECT * FROM Veterinarios WHERE Id_vet = ?";
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar veterinario", error: err });
    if (result.length === 0) return res.status(404).json({ mensaje: "Veterinario no encontrado" });
    res.status(200).json(result[0]);
  });
});


//      ENDPOINTS SERVICIOS
app.post('/saveServicio', (req, res) => {
  const { nombre_servicio, descripcion, precio, fecha, duracion, categoria, Id_mascota, Id_vet, estado } = req.body;
  const sql = `INSERT INTO Servicios(nombre_servicio, descripcion, precio, fecha, duracion, categoria, Id_mascota, Id_vet, estado)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [nombre_servicio, descripcion, precio, fecha, duracion, categoria, Id_mascota, Id_vet, estado], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al registrar servicio", error: err });
    res.status(201).json({ 
      mensaje: "Servicio registrado correctamente", 
      idGenerado: result.insertId 
    });
  });
});

app.get('/getAllServicios', (req, res) => {
  connection.query("SELECT * FROM Servicios", (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar servicios", error: err });
    res.status(200).json(result);
  });
});

app.get('/getServicioById/:id', (req, res) => {
  const sql = "SELECT * FROM Servicios WHERE Id_servicio = ?";
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar servicio", error: err });
    if (result.length === 0) return res.status(404).json({ mensaje: "Servicio no encontrado" });
    res.status(200).json(result[0]);
  });
});


//      ENDPOINTS MASCOTAS
app.post('/saveMascota', (req, res) => {
  const { nombre, especie, raza, sexo, fecha_nacimiento, color, nombre_propietario } = req.body;
  const sql = `INSERT INTO Mascotas (nombre, especie, raza, sexo, fecha_nacimiento, color, nombre_propietario)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [nombre, especie, raza, sexo, fecha_nacimiento, color, nombre_propietario], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al insertar mascota", error: err });
    res.status(201).json({ mensaje: "Mascota registrada", idGenerado: result.insertId });
  });
});

app.get('/getAllMascotas', (req, res) => {
  connection.query("SELECT * FROM Mascotas", (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar mascotas", error: err });
    res.status(200).json(result);
  });
});

app.get('/getMascotaById/:id', (req, res) => {
  const sql = "SELECT * FROM Mascotas WHERE Id_mascota = ?";
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar mascota", error: err });
    if (result.length === 0) return res.status(404).json({ mensaje: "Mascota no encontrado" });
    res.status(200).json(result[0]);
  });
});

// ENDPOINTS PRODUCTOS
app.post('/saveProducto', (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, marca, estado } = req.body;
  const sql = `INSERT INTO Productos (nombre, descripcion, precio, stock, categoria, marca, estado)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [nombre, descripcion, precio, stock, categoria, marca, estado], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al insertar producto", error: err });
    res.status(201).json({ mensaje: "Producto registrado", idGenerado: result.insertId });
  });
});

app.get('/getAllProductos', (req, res) => {
  connection.query("SELECT * FROM Productos", (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar productos", error: err });
    res.status(200).json(result);
  });
});

app.get('/getProductoById/:id', (req, res) => {
  const sql = "SELECT * FROM Productos WHERE Id_producto = ?";
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ mensaje: "Error al consultar producto", error: err });
    if (result.length === 0) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.status(200).json(result[0]);
  });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});