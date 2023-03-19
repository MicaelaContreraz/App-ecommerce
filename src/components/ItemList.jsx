import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ ropas }) => {
  return (
    <>
      <Container maxW="container.m" className="main-catalogue">
      <div className='row col-xl-11 mx-auto'>
      {ropas?.map((ropa) => (
          <Item
            key={ropa.id}
            id={ropa.id}
            name={ropa.name}
            img={ropa.img}
            description={ropa.description}
            price={ropa.price}
            stock={ropa.stock}
            category={ropa.category}
          />
        ))}

      </div>
       
      </Container>
    </>
  );
};

export default ItemList;