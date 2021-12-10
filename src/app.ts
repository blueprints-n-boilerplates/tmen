import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import './config';
import './middlewares/mongoose';

// routers
import usersRouter from './routes/user';
import productsRouter from './routes/product';
import morgan from 'morgan';
import categoryRouter from './routes/categories';

const app: Application = express(); // app is of type Application

/**
 * Middlewares
 */

// app.use(bodyParser.json());
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */

app.use('/api/auth', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/categories', categoryRouter);

export { app };
