import React from "react";

import { Link } from "react-router-dom";



const Item = ({ id, name, stock, category, img, price}) => {
  return (
    
      <div className='tarjetas col-xl-3 mx-auto my-5 d-flex flex-column align-items-center'>
            <img className='col-xl-10' src={img} alt={name}></img>
            { <h4><strong>ID:</strong>  {id} </h4> }
            <h4><strong>Nombre:</strong>  {name}</h4>
            <h4><strong>Categoría:</strong>  {category}</h4>
            
            <h4 className="mt-20"><strong>Stock:</strong>  {stock}</h4>
            <Link to={`/item/${id}`} className="btn btn-outline-secondary btn-lg ">Ver más</Link>
        </div>
  );
};

export default Item;