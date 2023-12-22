import express from 'express';
import { 
    registrar, 
    perfil, 
    confirmar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
} from "../controllers/veterinarioController.js";
import checkAuth from '../middleware/authmiddleware.js';

const router = express.Router();

// Área Pública
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route ("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Esta de arriba sustituye o es lo mismo que poner las dos de abajo
// router.get("/olvide-password/:token", comprobarToken);
// router.post("olvide-password:token", nuevoPassword);




// Área Privada
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);


export default router;