import Character from '../models/Character.js';

const getAllCharacters = (req, res) =>{
    Character.find()
        .then(characters => res.status(200).json(characters));
};

const getCharacterById = (req, res) =>{
    Character.findOne( { id: req.params.id })
        .then(character => res.status(200).json(character));
};

const getCharacterByName = (req, res) =>{
    Character.findOne({ name: {"$regex": req.params.name, "$options": "i"} })
        .then(character => res.status(200).json(character));
}

const createCharacter = (req, res) =>{
    console.log('El body vale: ', req.body);
    const newCharacter = new Character({ ...req.body });
    newCharacter.save()
    .then(character => res.status(201).json(character));
};

const deleteAllCharacters = (req, res) =>{
    Character.deleteMany()
        .then(() => res.status(200).json({ msg: 'All characters deleted!' }));
};

const deleteCharacterById = (req, res) =>{
    Character.deleteOne({ id: req.params.id })
        .then(() => res.status(200).json({ msg: 'Character deleted!' }));
};

const updateCharacterById = (req, res) =>{
    Character.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(character => res.status(200).json(character));
}

const controller = {
    getAllCharacters,
    getCharacterById,
    getCharacterByName,
    createCharacter,
    deleteAllCharacters,
    deleteCharacterById,
    updateCharacterById
}

export default controller;