import express from "express"
const folder = express.Router()

folder.use((req, res, next) => {
	console.log("Has entrado a las carpetas")
	next()
})

folder.get("/open", (req, res) => {
	res.send({ message: "Carpeta abierta" })
})

export default folder