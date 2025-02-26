import mongoose from "mongoose"

export default async function connection() {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/notes")
		console.log("Conectado a MongoDB en el proyecto NOTES")
	} catch (error) {
		console.error("❌ Error al conectar a MongoDB", error)
		process.exit(1)
	}
}