import React from 'react';
import '../Home.css'

function Televisores({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}Televisores</h1>
      <p className="text-center">Estos son todos tus productos relacionados a Televisores</p>
    </div>
  );
}

export default Televisores;