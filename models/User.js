import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();

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
		lastName: {
			type: String,
			minlength: 3,
			maxlength: 20,
			trim: true,
		},
		role: {
			type: Number,
			default: 1982,
			select: false,
		},
		round: {
			type: Number,
			default: null,
		},
		hazards: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'Hazard',
			},
		],
	},
	{ timestamps: true }
);

// Middleware to salt and hash password only if password is modified
UserSchema.pre('save', async function () {
	if (!this.isModified('password')) return;

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Function to create JWT - uses .env secret and token expiry variables.

// This is where I will add roles information that will be checked in auth.js.

UserSchema.methods.createJWT = function () {
const role = this.role
console.log('Role!!!',role);
	return jwt.sign(
		{
			UserInfo: {
				userId: this._id,
				role: this.role
			}
		},
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_LIFETIME,
		}
	);
};

// UserSchema.methods.createJWT = function () {
// 	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
// 		expiresIn: process.env.JWT_LIFETIME,
// 	});
// };

UserSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

export default mongoose.model('User', UserSchema);
