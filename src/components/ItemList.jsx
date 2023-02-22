import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ ropas }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {ropas?.map((ropa) => (
          <Item
            key={ropa.id}
            id={ropa.id}
            name={ropa.name}
            description={ropa.description}
            price={ropa.price}
            stock={ropa.stock}
            category={ropa.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;