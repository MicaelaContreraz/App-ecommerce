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
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";


const SendOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(name === "" || email === "") {
            alert("No pueden existir campos vacios")

        }else{
            addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
        }
        setEmail(" ");
    }


    const db = getFirestore()
    const orderCollection = collection(db, "orden");

    const order ={
        name,
        email
    };

  return (
    <div>
        <Center>
            <Heading>Sending orders</Heading>
        </Center>

        <Container>
            <FormControl>
                <form onSubmit={handleSubmit}>
                    <FormLabel>NAME</FormLabel>
                    <Input size="lg" onChange={(e) => setName(e.target.value)}/>
                    <FormLabel>EMAIL</FormLabel>
                    <Input size="lg" onChange={(e) => setEmail(e.target.value)}/>
                    <Button colorScheme="blue" type="submit" m={5}>
                        Send Information
                    </Button>
                </form>
            </FormControl>
        </Container>
        <Center>
            <Text as="o" m={3} fontSize="xl">
                Order ID: {" "}
            </Text>
            <Text as="mark" fontFamily="xl">
                {orderId}
            </Text>
        </Center> 
      
    </div>  
  )
}

export default SendOrder
