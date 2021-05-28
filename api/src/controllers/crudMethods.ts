import { RequestHandler } from 'express';
import modelEmployee from '../models/employeeModel'

// Save employee
export const saveEmployee: RequestHandler = (req, res) => {

	const { nombre, apellido, edad, trabajo } = req.body;

	const employee = new modelEmployee({
		nombre: nombre,
		apellido: apellido,
		edad: edad,
		trabajo: trabajo
	});
	employee.save();


	res.json("Save");
}

// Delete employee
export const deleteEmployee: RequestHandler = async (req, res) => {
	const employee = await modelEmployee.findByIdAndDelete(req.params.id);
	if (!employee) return res.status(204).json();
	return res.status(204).json();
}

// Update employee in database
export const updateEmployee: RequestHandler = async (req, res) => {
	const employee = await modelEmployee.findByIdAndUpdate(
		req.params.id,
		{
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			edad: req.body.edad,
			trabajo: req.body.trabajo
		}
	);

	if (!employee) return res.status(204).json();
	return res.status(204).json();
}