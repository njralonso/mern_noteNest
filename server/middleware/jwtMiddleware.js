import jwt from 'jsonwebtoken'

function tokenVerify(req, res, next) {
	const { token } = req.headers.authorization

	if (!token) return res.status(401).send('Access denied, token required')

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET)
		req.user = verified
		next()
	} catch (error) {
		res.status(400).send('Invalid token')
	}
}

export default tokenVerify