import React from 'react'
import { useState } from "react"
import Button from 'react-bootstrap/Button';

function counter() {

    const [contador, setContador] = useState(0);


    const aumentarContador = () => {
        console.log("aumentarContador")
        
        if(contador < 10){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if(contador > 0 ){
            setContador(contador - 1)
        }
    }

    const resetearContador = () => {
        setContador(0)
    }





  return (
   <>
     <p id="parrafo">El Contador va : {contador}</p>

                        
    <Button onClick={disminuirContador} variant="danger">-</Button>{' '}
    <Button onClick={resetearContador} variant="primary">Restaurar</Button>{' '}

    <Button onClick={aumentarContador} variant="primary">+</Button>{' '}

   
   </>
  )
}

export default counter