import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const TOKEN_SECRET = String(process.env.TOKEN_SECRET);

export function generateAccessToken(email: String, id: String) {
	return jwt.sign({ email, id }, TOKEN_SECRET, { expiresIn: '6d' }); // 6 days
}

export function authenticateAccessToken(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const authorization = req.headers['authorization'];
	const token = authorization && authorization.split(' ')[1]; // get access token

	if (!token) return res.sendStatus(401);

	jwt.verify(
		token,
		process.env.TOKEN_SECRET as string,
		(err: any, payload: any) => {
			if (err) return res.sendStatus(403);
			// req. = payload;
			next();
		},
	);
}
