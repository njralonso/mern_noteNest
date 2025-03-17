import express from 'express';
const user = express.Router();

import { registerController } from '../controllers/authController.js';

user.use((req, res, next) => {
	console.log("Has entrado a los usuarios");
	next()
})

export default user