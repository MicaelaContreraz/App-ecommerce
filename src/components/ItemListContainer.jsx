import React from 'react'
import Counter from './counter';
import { Container } from 'react-bootstrap';



function ItemListContainer({greeting}) {

    
    
    

  return (
    <div>
        <Container>
            <h1 className='text-center mt-10'>{greeting}</h1>

          
                
            <Counter/>
              
                        
            
        </Container>
      
    </div>
  )
}

export default ItemListContainer
