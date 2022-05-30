import express from 'express'
const router = express.Router()
import verifyRole from '../middleware/verifyRole.js';


import {
	createHazard,
	deleteHazard,
	updateHazard,
	getAllHazards,
} from '../controllers/hazardsController.js';

router.route('/').post(createHazard).get(getAllHazards)
router.route('/:id').delete(deleteHazard).patch(updateHazard)


export default router;