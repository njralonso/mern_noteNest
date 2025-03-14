import Folder from "../models/folderModel.js";

const createFolderServices = async (data) => {
	const folder = await Folder.create(data)
	return folder
}

export { createFolderServices }