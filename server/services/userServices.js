import User from "../models/userModel.js"

// async function getUserServices() {
// 	try {
// 		const users = await User.find();
// 		return users;
// 	} catch (error) {
// 		throw error;
// 	}
// }

async function getUserByIdServices(id) {
	try {
		const user = await User.findById(id);
		return user;
	}
	catch (error) {
		throw error;
	}
}

export { getUserByIdServices };