import mongoose from "mongoose"

const folderSchema = new mongoose.Schema({
	folder: { type: String, required: true },
	noteId: { type: [String] },
	shared: { type: [String] }
})

const Folder = mongoose.model("Folder", folderSchema)

export default Folder 