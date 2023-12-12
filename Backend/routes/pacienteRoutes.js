import express from "express";
const router = express.Router();
import pacienteController from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authmiddleware.js";



// router.post("/agregarPaciente", pacienteController.agregarPaciente);
// router.get("/obtenerPacientes", pacienteController.obtenerPacientes);

router
.route("/")
.post(checkAuth, pacienteController.agregarPaciente)
.get(checkAuth, pacienteController.obtenerPacientes);

router
    .route("/:id")
    .get(checkAuth, pacienteController.obtenerPaciente)
    .put(checkAuth, pacienteController.actualizarPaciente)
    .delete(checkAuth, pacienteController.eliminarPacienete)

export default router;
