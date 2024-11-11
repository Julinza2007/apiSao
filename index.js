import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const DB   = process.env.DB   || 'mongodb://127.0.0.1/apisao';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


mongoose.connect(DB)
  .then(() => console.log(`Connected to ${DB}`))
  .catch(err => console.error(`Connection error ${err}`));


import router from './routes/characterRouter.js';

app.use('/api/characters', router);

app.use((req, res) => {
  res.status(404).json({ msg: 'No encontrado' }); // responde 404 Not found
});

app.listen(PORT, () => {
  console.log('Server andando en http://localhost:' + PORT);
});