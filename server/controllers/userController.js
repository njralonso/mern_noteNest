import { getUserByIdServices } from "../services/userServices.js";
// getUsersServices
// updateUserServices
// deleteUserServices

async function getUserByIdController(req, res) {
	const { id } = req.params.id;
	const user = await getUserByIdServices(id);
	res.json({ user });
}

// async function updateUserController(req, res) {
// 	const id = req.params.id;
// 	const { email, password } = req.body;
// 	const user = await updateUserServices(id, { email, password });
// 	res.json({ user });
// }

// async function deleteUserController(req, res) {
// 	const id = req.params.id;
// 	const user = await deleteUserServices(id);
// 	res.json({ user });
// }

// async function getUsersController(req, res) {
// 	const users = await getUsersServices();
// 	res.json({ users });
// }	


export { getUserByIdController }
