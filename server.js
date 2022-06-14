import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
import 'express-async-errors';
import morgan from 'morgan';

// Db and authentication
import connectDb from './db/connect.js';

// Routers
import authRouter from './routes/authRoutes.js';
import hazardsRouter from './routes/hazardsRoutes.js';
import roundsRouter from './routes/roundsRoutes.js';
import adminRouter from './routes/adminRoutes.js';

// Middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';
import verifyRole from './middleware/verifyRole.js';


if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}
app.use(cors({ origin: 'https://round-report.netlify.app' }));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/admin',authenticateUser, adminRouter);
app.use('/api/v1/hazards', hazardsRouter);
app.use('/api/v1/round', roundsRouter);
// handling unfound routes
app.use(notFoundMiddleware);
// handling errors in routes
app.use(errorHandlerMiddleware);
// console.log('hello');
const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URL);
		app.listen(port, () =>
			console.log(
				`Server is listening on port ${port} and is connected to Db...`
			)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
