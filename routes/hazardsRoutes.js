import express from 'express'
const router = express.Router()
import verifyRole from '../middleware/verifyRole.js';
import authenticateUser from '../middleware/auth.js';

// will use verify role middleware when deleting hazards.

import {
	createHazard,
	deleteHazard,
	updateHazard,
	getAllHazards,
} from '../controllers/hazardsController.js';

router.route('/').post(authenticateUser, createHazard).get(getAllHazards)
router.route('/:id').delete(authenticateUser,deleteHazard).patch(authenticateUser,updateHazard)


export default router;