import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./components/Context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/ProyectoFinalReact"
              element={
                <ItemListContainer greeting="Welcome to Stoica Store!!!" />
              }
            />
            <Route
              exact
              path="/ProyectoFinalReact/category/:id"
              element={
                <ItemListContainer greeting="Welcome to Stoica Store!!!" />
              }
            />
            <Route
              exact
              path="/ProyectoFinalReact/item/:id"
              element={<ItemDetailContainer />}
            />
            <Route
              exact
              path="/ProyectoFinalReact/Cart"
              element={<CartContainer />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
