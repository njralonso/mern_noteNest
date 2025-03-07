import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config()

export default async function connection() {
	try {
		await mongoose.connect(process.env.DB)
		console.log("Conectado a MongoDB en el proyecto NOTES")
	} catch (error) {
		console.error("❌ Error al conectar a MongoDB", error)
		process.exit(1)
	}
}