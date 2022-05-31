import { UnauthenticatedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';

// Authorizing edit user, hazard routes - checks for valid jwt.
const auth = async (req, res, next) => {
    // authorization could be capitilized or not
	const authHeader = req.headers.authorization || req.headers.Authorization;
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw new UnauthenticatedError('Authentication Invalid');
	}
    // remove 'Bearer'
	const token = authHeader.split(' ')[1];
// Need to put expiration in jwt.verify()
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = { userId: payload.UserInfo.userId };
		req.role = { userRole: payload.UserInfo.role };
		console.log('req with decoded jwt additions',req.user,req.role);
		next();
	} catch (error) {
		throw new UnauthenticatedError('Authentication Invalid');
	}
};

// This is where I will authorize admin roles by checking roles in JWT.

export default auth;
