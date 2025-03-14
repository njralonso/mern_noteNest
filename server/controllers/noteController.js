import { createNoteServices } from "../services/noteServices.js";

const createNoteController = async (req, res) => {
	try {
		const note = await createNoteServices(req.body)
		res.status(201).send(note)
	} catch (error) {
		res.status(400).send({ message: error.message })
	}
}

export { createNoteController }