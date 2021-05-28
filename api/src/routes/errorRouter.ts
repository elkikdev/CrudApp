import { Router } from "express";
const router = Router();

// Eror first page
router.get("/", (req, res) => {
	res.redirect("/api/employees");
});

// Error 404
router.use((req, res) => {
	res.status(404).redirect("/");
})

export default router;