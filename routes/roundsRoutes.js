import express from 'express';
const router = express.Router();
import verifyRole from '../middleware/verifyRole.js';
import authenticateUser from '../middleware/auth.js';

import {
	getRound
} from '../controllers/roundsController.js';

router.route('/:id').get(getRound);
// router
// 	.route('/:id')
// 	.delete(authenticateUser, deleteRound)
// 	.patch(authenticateUser, updateRound);

export default router;
