// imports
// const express = require('express'); CommonJS
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
// config vars
const PORT = process.env.PORT || 3000;
const DB   = process.env.DB   || 'mongodb://localhost:27017/sao';
// objeto app
const app = express();
// middleware de aplicacion
app.use(morgan('dev'));  // middleware de logs
app.use(express.json()); // parsea los bodys en JSON
// conectar a la DB
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${DB}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

// esquemas y modelos
const CharacterSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
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
// GET /api/characters/search/:name
app.get('/api/characters/search/:name', (req, res) => {
  Character.find({ name: { "$regex": req.params.name, "$options": "i" } })
    .then(characters => res.status(200).json(characters));
    // .catch(err => res.status(403).json({ err: err.message }));
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
  console.log('Server andando');
});