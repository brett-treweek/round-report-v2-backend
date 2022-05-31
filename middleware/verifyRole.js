import { UnauthenticatedError } from '../errors/index.js';


// Middleware to add to routes for admin, user role auth.- eg. verifyRole(1982)
// Role- Admin: 1982, User: 1991

const verifyRole = (allowedRole) => {
	return (req, res, next) => {
		console.log('USER!!!', req.role.userRole);

		if (!req?.role) {
			throw new UnauthenticatedError('Unathorized');
		}

		console.log('allowedRole', allowedRole);
		console.log('req.role', req.role.userRole);

		if (allowedRole !== req.role.userRole) {
			throw new UnauthenticatedError('Unathorized');
		}
		next();
	};
};

export default verifyRole;
