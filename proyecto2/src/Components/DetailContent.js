import React from 'react';

function DetailContent({ product, onCollapseClick }) {
  return (
    <div>
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <a href="#" className="btn btn-primary" onClick={onCollapseClick}>
        Collapse
      </a>
    </div>
  );
}

export default DetailContent;
