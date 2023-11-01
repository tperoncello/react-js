import React from 'react';
import '../Home.css'

function Camaras({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}Camaras</h1>
      <p className="text-center">Estos son todos tus productos relacionados a Camaras</p>
    </div>
  );
}

export default Camaras;