import React from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';



const Collection = () => {
  const [products, setProducts] = useState([])
  console.log(products);

  useEffect(() =>{
    const db = getFirestore();

    const itemsCollection = collection(db, "ropa");
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
      
    });


  }, []);
  return (
    <div>
      <h3>Collection</h3>

      {
        products.map((product) =>(
          <div key={product.id}>
            <h4>Name: {product.name}</h4>
            <img src={product.img} alt={product.name} />
            <h5>Price: {product.price}</h5>
            <h5><strong>Category:</strong>  {product.category}</h5>
            <h5>Description: {product.description}</h5>

          </div>

        ))
      }
      
    </div>
  )
};

export default Collection
