import { Schema, model } from "mongoose";

const shema = new Schema({
	nombre: {type: String},
	apellido: {type: String},
	edad: {type: Number},
	trabajo: {type: String}
});

export default model("Employees", shema);