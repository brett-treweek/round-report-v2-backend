import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// Db and authentication
import connectDb from './db/connect.js';

// Routers
import authRouter from './routes/authRoutes.js'
import hazardsRouter from './routes/hazardsRoutes.js'

// Middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Welcome!');
});

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/hazards', hazardsRouter)
// handling unfound routes
app.use(notFoundMiddleware);
// handling errors in routes
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;



const start = async () => {
	try {
		await connectDb(process.env.MONGO_URL);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port} and is connected to Db...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();