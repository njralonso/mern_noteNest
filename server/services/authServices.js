import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/jwtUtils.js"

async function registerServices(email, password) {
	const user = await User.findOne({ email: email });
	if (user) throw new Error("User already exists");

	const salt = await bcrypt.genSalt(10);
	const passwordHash = await bcrypt.hash(password, salt);

	return await User.create({ email: email, password: passwordHash });
}

async function loginServices(email, password) {
	const user = await User.findOne({ email: email })
	if (!user) throw new Error("Invalid user");

	const validPassword = await bcrypt.compare(password, user.password)
	if (!validPassword) throw new Error("Invalid password");

	const token = generateToken(user)
	return token
}

export { registerServices, loginServices }