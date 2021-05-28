import mongoose from 'mongoose';
import color from 'cli-color'

// Connect to database
mongoose.connect(`mongodb://localhost:27017/employee-app`, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

// Verification
mongoose.connection.on("open", __ => {
	console.log(`${color.green("Backend:")} Connected database`);
});

mongoose.connection.on("error", error => {
	console.error(`${color.green("Backend:")} ${error}`);
});