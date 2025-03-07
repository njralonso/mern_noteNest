import Folder from "../models/folderModel.js"

const newFolder = async (data) => {
	const newFolder = await Folder.create(data)
	return newFolder
}

export { newFolder }