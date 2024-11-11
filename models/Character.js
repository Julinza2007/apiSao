import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    age: Number,
    profession: String,
    typeOfSword: String,
    img: String,
    description: String,
    link: String
});

const Character = mongoose.model('Character', characterSchema);

export default Character;