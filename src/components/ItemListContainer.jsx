import { useState, useEffect } from "react";
import ItemList from "./ItemList";
//import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';
import { collection, getDocs, getFirestore } from "firebase/firestore";




const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  //console.log(products);

  const { category } = useParams();
   console.log(category);

   

    useEffect(() => {
      const db = getFirestore();
      const productCollection = collection(db, "ropa");
      getDocs(productCollection).then((QuerySnapshot) => {
        const products = QuerySnapshot.docs.map((doc) =>({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(products)
      })
     
    }, []); 

  const catFilter = products.filter((ropa) => ropa.category === category);
  return (
    
    <div>


      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
        Clothes by Category
        </Heading>
      </Center>
      <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://markova.com/uploads/page_block/banner/image/2615/file.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://markova.com/uploads/page_block/banner/image/2598/file.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://markova.com/uploads/page_block/banner/image/2608/file.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {category ? <ItemList ropas={catFilter} /> : <ItemList ropas={ products} />}
    </div>
  );
};

export default ItemListContainer;