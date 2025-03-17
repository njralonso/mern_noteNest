import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
	title: { type: String, required: true },
	folderId: { type: String, required: true },
	block: { type: [], required: true },
	shared: { type: [String] }
});

const Note = mongoose.model("Note", noteSchema);

export default Note;