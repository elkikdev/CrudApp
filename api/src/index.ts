import express from 'express';
import morgan from 'morgan';
import color from 'cli-color'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// External files
import routerApi from './routes/apiRouter';
import routerError from './routes/errorRouter';
import './database';

// Initializations
const app = express();
dotenv.config();

// Settings
app.set("port", process.env.PORT)

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/", routerApi); // Api Routers
app.use("/", routerError); // Errors routers

// Port
app.listen(app.get("port"), () => {
	console.log(`\n${color.green("Backend:")} Server on port: ${color.blue(app.get("port"))}`);
});