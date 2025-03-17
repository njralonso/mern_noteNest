import Note from "../schemas/noteSchema.js"

const createNoteServices = async (data) => {
	const createNote = await Note.create(data)
	return createNote
}

export { createNoteServices }