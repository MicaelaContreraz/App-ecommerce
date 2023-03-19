import React from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState }  from "react";






const Form = () => {

    const [ orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const db = getFirestore()

const handleSubmit =(e)=>{
    e.preventDefault()
    addDoc(ordersCollection, order).then(({id})=> setOrderId(id));
    alert("Formulario enviado");
};
const order ={
    name,
    email
};

const ordersCollection = collection(db, "orden");
return (
    <div>
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre y apellido" 
          nChange={(e)=>setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit">Enviar informacion</button>
    </form>
    <p> Id de la orden: {orderId}</p>
</div>
);
};

export default Form