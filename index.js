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
app.use(express.json());
// middleware de aplicacion
app.use(morgan('dev'));  // middleware de logs
 // parsea los bodys en JSON
// conectar a la DB
mongoose.connect(DB)
  .then(() => console.log(`Connected to ${DB}`))
  .catch(err => console.error(`Connection error ${err}`));
 
// esquemas y modelos
const CharacterSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  age: Number,
  profession: String,
  typeOfSword: String,
  img: String,
  description: String,
  link: String
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
  const { id, name, age, profession, typeOfSword, img, description, link } = req.body;
  const newCharacter = new Character({ id, name, age, profession, typeOfSword, img, description, link });
  newCharacter.save()
    .then(character => res.status(201).json(character)); // responde 201 Created
});

app.post('/api/characters', (req, res) => {
   const characters = Character.insertMany(req.body)
    .then(characters => res.status(201).json(characters));
  })


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
