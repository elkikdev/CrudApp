
// Libs
import { Router } from "express";
const router = Router();

// Controllers
import { employees, employee } from "../controllers/getMethod";
import { saveEmployee, deleteEmployee, updateEmployee } from "../controllers/crudMethods";

// Methods get
router.get("/employees", employees); // View all employees
router.get("/:id", employee);

// Methods app crud
router.post("/employees/save", saveEmployee);
router.delete("/employees/delete/:id", deleteEmployee);
router.put("/employees/update/:id", updateEmployee);


export default router;