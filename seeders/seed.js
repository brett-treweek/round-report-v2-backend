import connectDb from '../db/connect.js';
import dotenv from 'dotenv';
dotenv.config();
import { Round, Hazard, User } from '../models/index.js';

import roundData from './roundData.js';
import hazardData from './hazardData.js';

const start = async () => {
	await connectDb(process.env.MONGO_URL);
	await Round.deleteMany({});
	await Hazard.deleteMany({});
	await User.deleteMany({});

	const rnd = await Round.insertMany(roundData);
	const haz = await Hazard.insertMany(hazardData);

	const user = await User.create({
		name: 'Mia',
		email: 'mia@mail.com',
		role: 1982,
		password: 'qwerty',
	});

	// populating rounds with hazards and createdBy Mia

	rnd.forEach(async (round) => {
		haz.forEach((haz) => {
			if (round.roundNumber === haz.hazardRound) {
				round.hazards.push(haz);
				round.createdBy = user._id;
			}
		});
	});
	await Round.deleteMany({});
	await Round.insertMany(rnd);

	// pupulating hazards with a round and createdBy Mia

	haz.forEach((hz) => {
		rnd.forEach((rd) => {
			const id = rd._id;
			if (rd.roundNumber === hz.hazardRound) {
				hz.roundId = id;
				hz.createdBy = user._id;
			}
		});
	});
	await Hazard.deleteMany({});
	await Hazard.insertMany(haz);

	console.log('Rounds and Hazards seeded!!!');
	process.exit(0);
};
start();
