import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDArP4QeW4c5xkelIb3WurLYk7LMtacLgI",
  authDomain: "ecommerce-topshop.firebaseapp.com",
  projectId: "ecommerce-topshop",
  storageBucket: "ecommerce-topshop.appspot.com",
  messagingSenderId: "1076634356813",
  appId: "1:1076634356813:web:7ab5560f02de55c0dc6004"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);