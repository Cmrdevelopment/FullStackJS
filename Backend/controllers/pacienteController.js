import Paciente from "../models/Paciente.js";

const agregarPaciente = async (req, res) => {

    const paciente = new Paciente(req.body);
    paciente.veterinario = req.veterinario._id;
    try {
        const pacienteAlmacenado = await paciente.save();
        res.json(pacienteAlmacenado)
    } catch (error) {
        console.log(error);
    }
};

const obtenerPacientes = async (req, res) => {
    const pacientes = await Paciente.find()
        .where("veterinario")
        .equals(req.veterinario)

    res.json(pacientes)
};

const obtenerPaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.findById(id);

        if(!paciente) {
            return res.status(404).json({ msg: 'Paciente no encontrado' });
        }

        if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
            return res.json({ msg: 'Acción no válida' });
        }

        if(paciente) {
            res.json(paciente);
        } 

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

const actualizarPaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.findById(id);

        if(!paciente) {
            return res.status(404).json({ msg: 'Paciente no encontrado' });
        }

        if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
            return res.json({ msg: 'Acción no válida' });
        }

      // Actualizar Paciente
        paciente.nombre = req.body.nombre || paciente.nombre;
        paciente.propietario = req.body.propietario || paciente.propietario;
        paciente.email = req.body.email || paciente.email;
        paciente.fecha = req.body.fecha || paciente.fecha;
        paciente.sintomas = req.body.sintomas || paciente.sintomas;
      try {
        const pacienteActualizado = await paciente.save();
        res.json(pacienteActualizado);
    } catch (error) {
        console.error(error);
        
      }
       

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

const eliminarPacienete = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente.findById(id);

        if(!paciente) {
            return res.status(404).json({ msg: 'Paciente no encontrado' });
        }

        if (paciente.veterinario._id.toString() !== req.veterinario._id.toString()) {
            return res.json({ msg: 'Acción no válida' });
        }

      try {
        await paciente.deleteOne();
        res.json({ msg: "Paciente Eliminido" });
    } catch (error) {
        console.error(error);
        
      }
       

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};


export default { 
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPacienete,


};