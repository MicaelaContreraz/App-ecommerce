import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
          
     
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

          <Route exact path="/cart" element={<Cart />} />
        </Routes>
       <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
