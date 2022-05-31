import Hazard from '../models/Hazard.js'
import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';

const createHazard = async (req, res) => {
   const { hazardRound, hazardType, hazardAddress} = req.body
   if (!hazardRound || !hazardType || !hazardAddress) {
       throw new BadRequestError('Please provide required values')
   }

//   TODO Add hazard to round
req.body.createdBy = req.user.userId
const hazard = await Hazard.create(req.body)
console.log('hazard id!', hazard);
//    Add hazard to user
   await User.findOneAndUpdate(
		{ _id: req.user.userId },
		{ $push: { hazards: hazard._id } }
   );
   res.status(StatusCodes.CREATED).json({hazard})
}
const deleteHazard = async (req, res) => {
    res.send('delete hazard')
}
const updateHazard = async (req, res) => {
    res.send('update hazard')
}
const getAllHazards = async (req, res) => {
    res.send('get all hazards')
}

export { createHazard, deleteHazard, updateHazard, getAllHazards }