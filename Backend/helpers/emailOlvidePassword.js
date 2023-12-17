import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.PORT_HOST,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const { email, nombre, token } = datos;

    //Enviar el email

    const info = await transporter.sendMail({
        from: "APV - Administrador de pacientes de Veterinaria",
        to: email,
        subject: "Restablece tu password",
        test: "Restablece tu password",
        html: `<p>Hola: ${nombre}, ha solicitado reestablecer tu password.</p>
            <p>Sigue el siguiente enlace para generar un nuevo password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a> </p>

            <p>Si tu no creaste este enlace, puedes ignorar este mensaje</p>
        `        
    })

    
    console.log("Mensaje enviado: %s", info.messageId);

}

export default emailOlvidePassword;


