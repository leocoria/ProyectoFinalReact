import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { cartItems, removeProduct } = useContext(CartContext);
  let navigate = useNavigate();
  return (
    <div className="cartContainer">
      <div className="d-flex justify-content-end container-fluid">
        <button
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => navigate(-1)}
        ></button>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        {cartItems.length > 0 ? (
          cartItems?.map((item) => <div>{item.name}</div>)
        ) : (
          <div>No hay productos en el carrito</div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
