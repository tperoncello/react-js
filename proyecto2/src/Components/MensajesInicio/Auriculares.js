import React from 'react';
import '../Home.css'

function Auriculares({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}Auriculares</h1>
      <p className="text-center">Estos son todos tus productos relacionados a Auriculares</p>
    </div>
  );
}

export default Auriculares;