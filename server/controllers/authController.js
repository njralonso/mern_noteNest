import { registerServices, loginServices } from "../services/authServices.js";

async function loginController(req, res) {
	try {
		const { email, password } = req.body
		const user = await loginServices(email, password)
		return res.status(200).json({ token: user })
	} catch (error) {
		res.status(400).json({ error: error.message })

	}
}

async function registerController(req, res) {
	const { email, password, rePassword } = req.body;
	if (password !== rePassword) return res.status(400).json({ success: false, message: "Passwords do not match" });
	try {
		const registerUser = await registerServices(email, password);
		res.status(201).json({ success: true, message: "User created" });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
}

export { loginController, registerController }