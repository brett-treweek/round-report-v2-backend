import Hazard from '../models/Hazard.js';
import User from '../models/User.js';
import Round from '../models/Round.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';

const getRound = async(req,res) => {
    const roundNumber = req.params.id
    const round = await Round.findOne({roundNumber: roundNumber})
    console.log('Round:', round);
    const roundHazards = await Hazard.find({ roundId: round._id });
    console.log('Round Hazards:', roundHazards);

    res.status(StatusCodes.OK).json({round, roundHazards});
}

export { getRound };