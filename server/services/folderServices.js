import Folder from "../schemas/folderSchema.js"

const createFolderServices = async (data) => {
	const folder = await Folder.create(data)
	return folder
}

export { createFolderServices }