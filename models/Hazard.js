import mongoose from "mongoose";

const HazardSchema = new mongoose.Schema(
	{
		hazardRound: {
			type: Number,
			required: [true, 'Please enter this round number'],
			min: 0,
			max: 100,
		},
		roundId: {
			type: mongoose.Types.ObjectId,
			ref: 'Round',
		},
		hazardType: {
			type: String,
			enum: {
				values: [
					'Aggressive Dog',
					'Aggressive Human',
					'Aggressive Magpie',
					'Blind Driveway',
					'Slippery Surface',
					'School',
					'Intersection',
					'Roadworks',
					'Missing Letterbox',
					'Other',
				],
			},
			required: true,
		},
		message: {
			type: String,
		},
		hazardAddress: {
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
		suburb: {
			type: String,
		},
		active: {
			type: Boolean,
			default: true,
			required: true,
		},
		resolved: {
			type: Boolean,
			default: false,
			required: true,
		},
		imageUrl: {
			type: String,
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
		createdByUsername: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Hazard', HazardSchema);