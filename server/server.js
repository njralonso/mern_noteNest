import express from "express"
import compression from "compression"
import cors from "cors"

import folder from "./routes/folder/folder.js"
import note from "./routes/note/note.js"
import Image from "./models/imageModel.js";

import sharp from "sharp"
import multer from "multer"

import dbConnection from "./db/connection.js"

const PORT = process.env.PORT || 5050
const app = express()

app.use(compression())
app.use(cors())
app.use(express.json())

app.use("/folder", folder)
app.use("/note", note)

// Configurar multer (guardar en memoria para procesar antes de almacenar)
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Ruta para subir imágenes desde Editor.js
app.post("/note/upload", upload.single("image"), async (req, res) => {
	try {
		// const { file } = req
		const { url } = req.body
		console.log(url)
		const { id } = req.body

		if (!url) {
			return res.status(400).json({ message: "No file uploaded" })
		}

		const optimizedImage = await sharp(file.buffer)
			.resize({ width: 800 }) // Redimensionar
			.jpeg({ quality: 80 }) // Convertir a JPEG y comprimir
			.toBuffer();

		// Guardar en MongoDB
		const newImage = new Image({
			name: req.body.originalname,
			img: {
				data: url,
				contentType: "image/jpeg",
			},
		});

		const savedImage = await newImage.save();
		console.log("imagen guardada", savedImage)
		res.json({
			success: 1,
			file: {
				url: `http://localhost:5000/image/${savedImage._id}`, // URL para acceder a la imagen
			},
		});

		res.status(200).json({ message: "File uploaded" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

dbConnection()
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })