import express from "express"
import { loginController, registerController } from "../controllers/authController.js"
const auth = express.Router()

auth.use((req, res, next) => {
	console.log("Has entrado a la autenticación")
	next()
})

auth.post("/login", loginController)
auth.post("/register", registerController)

export default auth