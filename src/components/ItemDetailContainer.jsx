import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";



const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "ropa");
    getDocs(productCollection).then((QuerySnapshot) => {
      const products = QuerySnapshot.docs.map((doc) =>({
        ...doc.data(),
        id: doc.id,
      }));
      setData(products);
    });
  
  }, []); 

  return <ItemDetail ropa={data} />;
};

export default ItemDetailContainer;