import { RequestHandler } from "express";
import modelEmployee from '../models/employeeModel';

// View all employees
export const employees: RequestHandler = async (req, res) => {
	const employee = await modelEmployee.find();
	if (!employee) return res.status(204).json();
	res.json({employee});
}

export const employee: RequestHandler = async (req, res) => {
	const employee = await modelEmployee.findById(req.params.id);
	if (!employee) return res.status(204).json();
	res.json(employee);
	
}