import express from 'express';
import controller from '../controllers/characterControllers.js';

const router = express.Router();

router.route('/')
.get(controller.getAllCharacters)
.post(controller.createCharacter)
.delete(controller.deleteAllCharacters);

router.route('/:id')
.get(controller.getCharacterById)
.delete(controller.deleteCharacterById)
.put(controller.updateCharacterById);

router.route('/search/:name').get(controller.getCharacterByName);

export default router;