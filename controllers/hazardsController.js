import Hazard from '../models/Hazard.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthenticatedError } from '../errors/index.js';

const createHazard = async (req, res) => {
   const { hazardRound, hazardType, hazardAddress} = req.body
   if (!hazardRound || !hazardType || !hazardAddress) {
       throw new BadRequestError('Please provide required values')
   }
   req.body.createdBy = req.user.userId
   const hazard = await Hazard.create(req.body)
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