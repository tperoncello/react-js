import React from 'react';
import '../Home.css'

function Consolas({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}Consolas</h1>
      <p className="text-center">Estos son todos tus productos relacionados a Consolas</p>
    </div>
  );
}

export default Consolas;