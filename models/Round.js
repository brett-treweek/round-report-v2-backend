import mongoose from 'mongoose';


const RoundSchema = new mongoose.Schema(
	{
		roundNumber: {
			type: Number,
			required: [true, 'Please enter this round number'],
			min: 0,
			max: 100,
		},
		hazards: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'Hazard',
			},
		],
		suburb: {
			type: String,
		},
		startAddress: {
			address: {
				type: String,
			},
			lat: {
				type: Number,
			},
			lng: {
				type: Number,
			},
		},
		lpo: {
			address: {
				type: String,
			},
			lat: {
				type: Number,
			},
			lng: {
				type: Number,
			},
		},
		relay: {
			address: {
				type: String,
			},
			lat: {
				type: Number,
			},
			lng: {
				type: Number,
			},
		},
		// lpo: {
		// 	type: String,
		// 	required: false,
		// },
		// relay: {
		// 	type: String,
		// 	required: false,
		// },
		postie: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
		},
		// lat: {
		// 	type: Number,
		// 	required: true,
		// },
		// lng: {
		// 	type: Number,
		// 	required: true,
		// },
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			// required: [true, 'Please provide user'],
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Round', RoundSchema);
