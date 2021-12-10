import { app } from './app';
import './config';

const PORT: number = Number(process.env.PORT);

if (!PORT) {
	console.error(`Please create a PORT environment variable!!!`);
	process.exit(1);
}

// Server setup
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
