import React from 'react';
import '../Home.css'

function Celulares({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}Celulares</h1>
      <p className="text-center">Estos son todos tus productos relacionados a Celulares</p>
    </div>
  );
}

export default Celulares;