import React from 'react';
import '../Home.css'

function Computacion({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}Computacion</h1>
      <p className="text-center">Estos son todos tus productos relacionados a Computacion</p>
    </div>
  );
}

export default Computacion;