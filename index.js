<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const DB = "mongodb://127.0.0.1:27017";

const app = express();

    mongoose.connect(DB, {}, (err, res) => {
    if (!err) {
        console.log("Base de datos conectada!");
    } else {
        console.log('Error al conectarse a la base de datos: ' + err);
    }
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
=======
// imports
// const express = require('express'); CommonJS
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
// config vars
const PORT = process.env.PORT || 3000;
const DB   = process.env.DB   || 'mongodb://127.0.0.1/apisao';
// objeto app
const app = express();
// middleware de aplicacion
app.use(morgan('dev'));  // middleware de logs
app.use(express.json()); // parsea los bodys en JSON
// conectar a la DB
mongoose.connect(DB)
  .then(() => console.log(`Connected to ${DB}`))
  .catch(err => console.error(`Connection error ${err}`));
 
// esquemas y modelos
const CharacterSchema = new mongoose.Schema({
  id: { type: Number},
  name: String,
  age: Number,
  profession: String,
  typeOfSword: String,
  img: String,
  description: String,
  link: String,
});
const Character = mongoose.model('Character', CharacterSchema);
// rutas de la API
// todos los personajes
// GET /api/characters

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/api/characters', (req, res) => {
  Character.find()
    .then(characters => res.status(200).json(characters)); // responde 200 OK
});

// un personaje por ID
app.get('/api/characters/:id', (req, res) => {
  Character.findOne({ id: req.params.id })
    .then(character => res.status(200).json(character));
});
// app.get('/api/characters/id/:id', (req, res) => {
//   Character.find({ id: req.params.id })
//     .then(characters => res.status(200).json(characters));
// });
// crear un personaje 
app.post('/api/characters', (req, res) => {
  console.log('El body vale: ', req.body);
  const { id, name, img, profession } = req.body;
  const newCharacter = new Character({ id, name, img, profession });
  newCharacter.save()
    .then(character => res.status(201).json(character)); // responde 201 Created
});

// borrar un personaje 
app.delete('/api/characters/:id', (req, res) => {
  Character.deleteOne({ id: req.params.id })
    .then(() => res.status(200).json({ msg: 'Character deleted!' }));
});

app.delete('/api/characters', (req, res) => {
  Character.deleteMany()
    .then(() => res.status(200).json({ msg: 'Characters deleted!' }));
});

// modificar un personaje
app.put('/api/characters/:id', (req, res) => {
  Character.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
    .then(character => res.status(200).json(character));
}); 
// error 404
app.use((req, res) => {
  res.status(404).json({ msg: 'No encontrado' }); // responde 404 Not found
});
// listen
app.listen(PORT, () => {
  console.log('Server andando en http://localhost:' + PORT);
});
>>>>>>> 25e13df14bf14de9b8c612680bbae297d829e9fc
