import mongoose, { Document, Schema } from 'mongoose';
// import { Address, AddressSchema } from './common';

// min of 9 chars
export const PASSWORD_REGEX =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{9,50}$/;

export interface IUser extends Document {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	date_registered?: Date;
	date_updated?: Date;
	addresses?: [string]; // one or more
	// get_fullname: (firstName: string, lastName: string) => string;
}

const UserSchema: Schema = new Schema(
	{
		first_name: { type: String, required: true },
		last_name: { type: String, required: true, trim: true },
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: { type: String, required: true },
		addresses: [{ type: String }],
	},
	{ timestamps: true },
);

// UserSchema.methods.getFullName = function () {
// 	return `${this.firstName} ${this.lastName}`;
// };

// comparePassword

// resetPassword

// setPassword

//

export const User = mongoose.model<IUser>('user', UserSchema);
