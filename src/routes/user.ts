import { body, validationResult } from 'express-validator';
import express, { Response, Request } from 'express';
import { IUser, PASSWORD_REGEX } from '../models/user';
import * as UserController from '../controllers/user';
import { generateAccessToken } from '../middlewares/jwt';

const usersRouter = express.Router();

// register
usersRouter.post(
	'/register',
	body('email').isEmail(),
	body('password').matches(PASSWORD_REGEX),
	async (req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			try {
				const userData: IUser = req.body;
				const user = await UserController.register(userData);
				const token = generateAccessToken(user.email, user._id);

				// Successful registration
				return res.status(201).json({
					email: user.email,
					token: token,
				});
			} catch (err) {
				throw err;
			}
		} catch (err: any) {
			// Gateway Error
			return res.status(500).json({ message: err.message });
		}
	},
);

// login
usersRouter.post('/login', async (req: Request, res: Response) => {
	try {
		try {
			const userData: IUser = req.body;
			const user = await UserController.login(userData);
			const token = generateAccessToken(user.email, user._id);

			// Successful login
			return res.status(200).json({
				email: user.email,
				token: token,
			});
		} catch (err) {}
	} catch (err: any) {
		// Gateway Error
		return res.status(500).json({ message: err.message });
	}
});

export default usersRouter;
