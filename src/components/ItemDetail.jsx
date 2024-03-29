import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    Alert,
  } from "@chakra-ui/react";
 
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  import { getDoc, doc, getFirestore } from "firebase/firestore";
  import { useState, useEffect } from "react";


  const ItemDetail = ({ ropa }) => {
    const { id } = useParams();
    // console.log(id);

    const [product, setProduct] = useState([]);
    console.log(product);

  
    
    useEffect(() => {
      const db = getFirestore()
      
      const oneItem = doc(db, "ropa", `${id}`);
      getDoc(oneItem).then((snapshot)=>{
        if (snapshot.exists()){
          setProduct(snapshot.data())
        }else {
          console.log("No such document")
        }
      })
    }, []);
    
    
    const ropaFilter = ropa.filter((ropa) => ropa.id == id);
    return (
      <>
        {ropaFilter.map((ropa) => (
          <div  key={ropa.id}>
            <Center p="1rem">
              <Card className="card-main shadow-lg">
                <CardBody>
                  <Image borderRadius="lg" src={ropa.img} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{ropa.name}</Heading>
                    
                    <Text color="blue.800" fontSize="l">
                      Category: {ropa.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {ropa.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: U$D {ropa.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={ropa.stock}
                    id={ropa.id}
                    price={ropa.price}
                    name={ropa.name}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;