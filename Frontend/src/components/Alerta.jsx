

// eslint-disable-next-line react/prop-types
const Alerta = ({ alerta }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`bg-gradient-to-r ${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
      {/* eslint-disable-next-line react/prop-types */}
      {alerta.msg}
    </div>
  );
}

export default Alerta;
