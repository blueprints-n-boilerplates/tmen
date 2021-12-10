import mongoose, { ConnectOptions } from 'mongoose';

import { DB_URI } from './mongo';

const db = mongoose.connection;

db.once('connected', () => console.log('MongoDB connected.'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('disconnected', () => console.log('MongoDB disconnected.'));
db.on('connecting', () => console.log('MongoDB connecting...'));
db.on('reconnected', () => console.log('MongoDB reconnected.'));
mongoose
	.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions)
	.catch((err) => console.error('MongoDB initial connection error.', err));
