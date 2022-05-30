import { UnauthenticatedError } from '../errors/index.js';


// Middleware to add to routes for admin role auth.- eg. verifyRole(1982)
const verifyRole = (role) => {
	return (req, res, next) => {
		console.log('USER!!!', req.role.userRole);

		if (!req?.role) {
			throw new UnauthenticatedError('Unathorized');
		}
		console.log('req.role.userRole', req.role.userRole);
		console.log('role', role);

		if (role !== req.role.userRole) {
			throw new UnauthenticatedError('Unathorized');
		}
		next();
	};
};

export default verifyRole;
