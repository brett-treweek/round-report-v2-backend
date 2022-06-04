import Hazard from '../models/Hazard.js';
import User from '../models/User.js';
import Round from '../models/Round.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';

// TODO: add Suburb, Message feilds to new hazards.
const createHazard = async (req, res) => {
	const { hazardRound, hazardType, hazardAddress, hazardUrl } = req.body;

	if (!hazardRound || !hazardType || !hazardAddress) {
		throw new BadRequestError('Please provide required values');
	}

	// Adding user_id and username to hazard.
	const { name } = await User.findById(req.user.userId);
	req.body.createdByUsername = name;
	req.body.createdBy = req.user.userId;

	// Adding round_id to hazard.
	const { _id } = await Round.findOne({ roundNumber: hazardRound });
	req.body.roundId = _id;

	// Creating hazard.
	const hazard = await Hazard.create(req.body);

	//    Add hazard to user
	await User.findOneAndUpdate(
		{ _id: req.user.userId },
		{ $push: { hazards: hazard._id } }
	);

	// Add hazard to round
	await Round.findOneAndUpdate(
		{ _id: _id },
		{ $push: { hazards: hazard._id } }
	);

	// Updating hazards to user for response to update state on frontend.
	const user = await User.findById(req.user.userId);
	const userHazards = await Hazard.find({ _id: user.hazards });
	user.hazards = userHazards;
	console.log('userHazardsAddhazard', userHazards);

	res.status(StatusCodes.CREATED).json({ hazard, user });
};

const deleteHazard = async (req, res) => {
	res.send('delete hazard');
};

const updateHazard = async (req, res) => {
	res.send('update hazard');
};

const getAllHazards = async (req, res) => {
	const hazards = await Hazard.find();
	const totalHazards = hazards.length;
	res.status(StatusCodes.OK).json({ hazards, totalHazards });
};

export { createHazard, deleteHazard, updateHazard, getAllHazards };
