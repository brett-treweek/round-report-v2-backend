import User from '../models/User.js';
import Hazard from '../models/Hazard.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';

const register = async (req, res, next) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		throw new BadRequestError('Please provide all values');
	}

	const userAlreadyExists = await User.findOne({ email });
	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use');
	}
	const user = await User.create({ name, email, password });
	const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({
		user: {
			name: user.name,
			lastName: user.lastName,
			email: user.email,
			hazards: user.hazards,
			id: user._id,
			round: user.round,
		},
		token,
	});
};

// Need to fetch user hazards and return them in the res

const login = async (req, res) => {
	// Checking to make sure email and password are given.
	const { email, password } = req.body;
	if (!email || !password) {
		throw new BadRequestError('Please provide all values');
	}

	// Getting user from database. Including password and role.
	const user = await User.findOne({ email })
		.select('+password')
		.select('+role');
	if (!user) {
		throw new UnauthenticatedError('Invalid Credentials');
	}

	console.log('User in authController', user, user.role);

	// Checking password is correct with User method comparePassword()
	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError('Invalid Credentials');
	}

	// Getting users hazards and setting them in user object.
	const userHazards = await Hazard.find({ _id: user.hazards });
	user.hazards = userHazards;

	// Creating admin boolean to be sent in response and saved in state/localStorage, for conditional rendering of admin button on frontend. Admin role is still verified on server when accessing protected admin routes (ie. clicking admin button or navigating to admin route) to ensure security.
	let admin = false
	if (user.role === 1982) {
		admin = true
	}
	
	// Creating new jwt and setting password and role as undefined for the response- for security.
	const token = user.createJWT();
	user.password = undefined;
	user.role = undefined;
	res.status(StatusCodes.OK).json({ user, token, admin });
};

const updateUser = async (req, res) => {
	const { email, name, round, lastName } = req.body;
	if (!email || !name || !round || !lastName) {
		throw new BadRequestError('Please provide all values');
	}
	const user = await User.findOne({ _id: req.user.userId });

	user.email = email;
	user.name = name;
	user.round = round;
	user.lastName = lastName;

	// Getting users hazards and setting them in user object.
	const userHazards = await Hazard.find({ _id: user.hazards });
	user.hazards = userHazards;

	// salt password only if editing password in presave method on user model.
	await user.save();
	const token = user.createJWT();

	res.status(StatusCodes.OK).json({ user, token });
};

export { register, login, updateUser };
