import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const Document = () => {

    const [product, setProduct] = useState([]);
    console.log(product);


    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "ropa", `${id}`);
        getDoc(oneItem).then((snapshot)=>{
            if (snapshot.exists()){
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    }, []);

  return (
    <div>
     {
        <div>
            <h2>Producto</h2>
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
            
        </div>
     }
    </div>
  );
}

export default Document;