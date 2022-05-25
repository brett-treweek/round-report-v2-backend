import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide your name'],
			minlength: 3,
			maxlength: 20,
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Please provide your email'],
			validate: {
				validator: validator.isEmail,
				message: 'Please provide a valid email',
			},
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please provide your password'],
			minlength: 6,
			select: false,
		},
		admin: {
			type: Boolean,
			default: false,
			select: false,
		},
		round: {
			type: Number,
			default: null,
		},
		hazards: [],
	},
	{ timestamps: true }
);

UserSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

export default mongoose.model('User', UserSchema);
