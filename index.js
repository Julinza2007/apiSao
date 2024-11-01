import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const PORT = 3000;
const DB = 'mongodb://localhost/apiSao';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

mongoose.connect(DB)
    .then(() => console.log('Database Connected!'));


// Esquemas y Modelos

const CharacterSchema = new mongoose.Schema({
    name: {type: String, unique: true},    
    age: Number,
    profession: String,
    typeOfSword: String,
    img: String,
    description: String,
    link: String
});

const Character = mongoose.model('Character', CharacterSchema);


app.get('/api/characters', (req, res) => {
   Character.find()
    .then(characters => res.status(200).json(characters)); 
});

app.get('/api/characters/:id', (req, res) => {
    Character.findOne({id: req.params.id})
    .then(character => res.status(200).json(character)); 
});

app.post('/api/characters', (req, res) => {
    console.log('El body vale:', req.body);
    const { name, age, profession, typeOfSword, img, description, link } = req.body;
    
    const newCharacter = new Character({ name, age, profession, typeOfSword, img, description, link });

    newCharacter.save()
        .then(character => res.status(201).json(character));
});

app.delete('/api/characters/:id', (req, res) => {
    Character.deleteOne({id: req.params.id})
        .then(character => res.status(200).json({ message: 'Character deleted'}));
});

app.put('/api/characters/:id', (req, res) => {
    Character.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(character => res.status(200).json(character))
        .catch(err => res.status(400).json({ message: 'Error updating character', error: err }));
});

app.use((req, res) => {
    res.status(404).json({ message: 'No encontrado' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});