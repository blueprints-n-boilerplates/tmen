import bcrypt from 'bcryptjs';
import { IUser, User } from '../models/user';

/* Common Error Messages */
const INVALID_CREDENTIALS = 'Invalid credentials.';

export const register = async (newUserData: IUser): Promise<IUser> => {
	try {
		// check if user email is existing
		const user = await User.findOne({ email: newUserData.email }).exec();

		if (!user) {
			// if there's no match, then create a record
			// hash password first
			const hashedPassword = await bcrypt.hash(newUserData.password, 12);
			newUserData.password = hashedPassword;
			const createdUser = await new User({ ...newUserData }).save();
			return createdUser;
		} else {
			// else, return the existing
			throw Error('Existing email is used.');
		}
	} catch (err) {
		throw err;
	}
};

export const login = async (authCredentials: any): Promise<any> => {
	try {
		// check if user email is existing
		const user = await User.findOne({
			email: authCredentials.email,
		}).exec();

		if (!user) {
			// if there's no match, then return an error
			throw Error(INVALID_CREDENTIALS);
		} else {
			// else, check if password sent matches the recorded password
			let isValidCredentials = await bcrypt.compare(
				authCredentials.password,
				user.password,
			);

			if (isValidCredentials) {
				return user;
			} else {
				throw Error(INVALID_CREDENTIALS);
			}
		}
	} catch (err) {
		throw err;
	}
};
