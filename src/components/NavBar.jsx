import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" className="shadow" color="#262626" >
        <Flex alignItems="center" gap="2" >
         
        
          <Box p="10" w="300px" h="100" className="nav">
            <Heading size="md">
              <Link to={"/"}>TOPSHOP</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                
                  Catalogo de Ropa
               
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Productos
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Remeras"}`}>
                  <MenuItem>Remeras</MenuItem>
                </Link>
                <Link to={`/category/${"Pantalones"}`}>
                  <MenuItem>Pantalones</MenuItem>
                </Link>
                <Link to={`/category/${"Shorts"}`}>
                  <MenuItem>Shorts</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;