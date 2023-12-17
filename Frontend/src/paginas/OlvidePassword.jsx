
import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
// import clienteAxios from "../config/axios";


const OlvidePassword = () => {
    const [ email, setEmail] = useState('')
    const [ alerta, setAlerta ] = useState({})


    const handleSubmit = async e => {
        e.preventDefault()

        if(email === '' || email.length < 5 ) {
            setAlerta({ msg: "El Email es obligatorio", error: true })
            return
        }

        try {
            const { data } = await clienteAxios.post ('/veterinarios/olvide-password', { email })
            setAlerta({msg: data.msg})            
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
    

    const { msg } = alerta

  return (
    <>
    
        <div>
            <h1 className="text-indigo-600 font-black text-6xl"> 
            Recupera tu Acceso y no Pierdas {""}
            <span className="text-black">tus Pacientes</span></h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            { msg && <Alerta
                alerta= {alerta}
            />}

           <form
            onSubmit={handleSubmit}
           >
           <div className="my-5">
                <label
                    className="uppercase text-gray-600 block text-xl font-bold"
                >
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Email de registro"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <input
            type="submit"
            value="Enviar instrucciones"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
            />
            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
            {/* <a href="/registrar">¿No tienes una cuenta?</a> esto es un linñ tradicional*/}
            {/* Pero ponemos el Link desde react-router-dom  */}
            
            <Link className="block text-center my-5 text-gray-500" 
                to="/" >¿Ya tienes una cuenta? Inicia Sesión</Link>
            <Link className="block text-center my-5 text-gray-500" 
                to="/registrar" >¿No tienes una cuenta? Regístrate</Link>
           </nav>
          </div>
          
    
    </>
  )
}

export default OlvidePassword

// ----------------------------------------------------------

// import { useState } from "react";
// // import axios from 'axios';
// import { Link } from "react-router-dom";
// import Alerta from "../components/Alerta";
 
// // const passwordChangeUrl = import.meta.env.VITE_PASSWORD_CHANGE_URL;
 
// const OlvidePassword = () => {
//     const [email, setEmail] = useState("");
//     const [alerta, setAlerta] = useState({});
 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
 
//         if (email === "") {
//             setAlerta({
//                 msg: "El correo es obligatorio",
//                 error: true,
//             });
//             return;
//         }
//     }
 
//     const { msg } = alerta;
 
//     return (
//         <>
//             <div>
//                 <h1 className="text-yellow-600 font-black text-7xl text-center">Recupera tu cuenta y no pierdas tus <span className="text-white">clientes</span></h1>
//             </div>
//             <div className="p-8 mt-20 md:mt5 shadow-lg bg-neutral-800 rounded-lg">
//                 {msg && <Alerta
//                     alerta={alerta}
//                 />}
//                 <form
//                     onSubmit={handleSubmit}
//                 >
//                     <div className="my-5">
//                         <label className="uppercase text-white block text-md font-bold">Correo</label>
//                         <input
//                             className="border w-full p-2 mt-3 rounded-md"
//                             type="email"
//                             placeholder="ingresa tu correo"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <input
//                         className="bg-yellow-600 w-full py-2 px-10 rounded-md text-white uppercase font-bold mt-10 hover:cursor-pointer      hover:bg-yellow-800 md:w-auto"
//                         type="submit"
//                         value="Reestablecer contraseña"
//                     />
//                     <nav className="mt-10 lg:flex lg:justify-between">
//                         <Link to="/" className="text-gray-400 block text-center text-md font-bold mt-3">¿Ya tienes una cuenta? Inicia sesión</Link>
//                         <Link to="/forgot-password" className="text-gray-400 block text-center text-md font-bold mt-3">Olvide mi contraseña</Link>
//                     </nav>
//                 </form>
//             </div>
 
//         </>
//     )
// }
 
// export default OlvidePassword