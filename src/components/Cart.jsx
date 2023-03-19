import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Container,
    Box,
    Textarea,
    Center,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Image,
    GridItem,
    Flex,
  } from "@chakra-ui/react";
  import { useState, useContext } from "react";
  import { CartContext } from "../contexts/ShoppingCartContext";
  import { collection, getFirestore, addDoc } from "firebase/firestore"
import SendOrder from "./SendOrder";


  const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
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
    const deleteId = cart.map((item) => {
      return item.id;
    });
  
const ordersCollection=collection(db, "orden");
    return (
      <>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Cart
          </Heading>
        </Center>
        {cart.map((item) => {
          return (
            <Container
              key={item.id}
              maxW="container.sm"
              className="main-catalogue "
            >
              <Card maxW="sm" m="3rem" className="shadow">
                <CardHeader>
                  
                  <Heading size="md">{item.name}
                
                  </Heading>
                </CardHeader>
                <CardBody>
              
                    <Image
                      boxSize='100px'
                      objectFit='cover'
                      src={item.img}
                      alt={item.name}
                    />
            
                
                  <Text as="b">Quantity: {item.quantity}</Text>
                  <Text>Price: U$D {item.price}</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="red"
                    onClick={() => console.log("Eliminando")}
                  >
                    Delete from cart
                  </Button>
                </CardFooter>
              </Card>
            </Container>
          );
        })}
        

        <SendOrder/>
      </>
    );
  };
  
  export default Cart;