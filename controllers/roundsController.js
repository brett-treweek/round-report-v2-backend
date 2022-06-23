import Hazard from '../models/Hazard.js';
import User from '../models/User.js';
import Round from '../models/Round.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';

const getRound = async (req, res) => {
	const { id: roundNumber } = req.params;
	if (!roundNumber) {
		throw new BadRequestError('Please provide required values');
	}

	// Getting Round from given id:roundNumber.
	const round = await Round.findOne({ roundNumber: roundNumber });

	// Getting all associated hazards for round.
	const roundHazards = await Hazard.find({ _id: round.hazards });

	// responding with round and its hazards.
	res.status(StatusCodes.OK).json({ round, roundHazards });
};

const createRound = async (req, res) => {
	const { roundNumber, suburb, startAddress, lpo, relay } = req.body;
	if (!roundNumber || !suburb || !startAddress || !lpo || !relay) {
		throw new BadRequestError('Please provide required values');
	}

	// Checking if user is an admin and Adding user_id and username to round.
	// const user = await User.findById(req.user.userId).select('+role');
	// if (!user || user.role !== 1982) {
	// 	throw new UnauthenticatedError('Invalid Credentials');
	// }

	// req.body.createdByUsername = user.name;
	// req.body.createdBy = req.user.userId;

	// Creating round.
	const round = await Round.create(req.body);
	res.status(StatusCodes.CREATED).json({ round });
};

export { getRound, createRound };
