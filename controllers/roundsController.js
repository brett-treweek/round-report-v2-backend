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

export { getRound };
