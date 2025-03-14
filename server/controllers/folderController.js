import { createFolderServices } from "../services/folderServices.js";

const createFolderController = async (req, res) => {
	const { title } = req.body
	const folder = await createFolderServices({ title })
	res.status(201).send({ folder })
}

export { createFolderController }