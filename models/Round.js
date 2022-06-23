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
			latlng: {
				lat: {
					type: Number,
				},
				lng: {
					type: Number,
				},
			},
		},
		lpo: {
			address: {
				type: String,
			},
			latlng: {
				lat: {
					type: Number,
				},
				lng: {
					type: Number,
				},
			},
		},
		relay: {
			address: {
				type: String,
			},
			latlng: {
				lat: {
					type: Number,
				},
				lng: {
					type: Number,
				},
			},
		},
		postie: {
			type: String,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
		},
		createdByUsername: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Round', RoundSchema);
