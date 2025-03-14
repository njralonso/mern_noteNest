import express from "express"
import { createFolderController } from "../../controllers/folderController.js"
const folder = express.Router()

folder.use((req, res, next) => {
	console.log("Has entrado a las carpetas")
	next()
})

folder.post("/create", createFolderController)

export default folder