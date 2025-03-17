import express from 'express';
import { createNoteController } from '../controllers/noteController.js';
const note = express.Router();

note.use((req, res, next) => {
	console.log("Has entrado a las notas");
	next()
})

note.post("/create", createNoteController)

export default note