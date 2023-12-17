// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// Esta se pone y se sustitute a la anterior para que no redenderice dos veces y no aparezca token no valido al comprobar cuenta
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
