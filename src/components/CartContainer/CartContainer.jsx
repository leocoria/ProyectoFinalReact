import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./CartContainer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CartContainer = () => {
  const { cartItems, removeProduct, clearCart, getTotal, getTotalQuantity} = useContext(CartContext);
  let navigate = useNavigate();
  const [purchase, setPurchase] = useState(false)
  

  const startPurchase=()=>{
    setPurchase(true)
  }
  return (
    <div className="cartContainer">
      <div className="d-flex justify-content-center flex-column bg-gainsboro w-50 align-items-center border border-white rounded bg-light">
      <div className="d-flex justify-content-between container-fluid w-100 bg-dark border border-gray rounded">
        <div style={{color:"White"}}>Cart</div>
        <button
          type="button"
          class="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => navigate(-1)}
        ></button>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column w-100">
        {cartItems.length > 0 ? (
          cartItems?.map((item) => <><div className="d-flex justify-content-between w-75 bg-white"><img className="smallItemImg" src={item.img}></img><span className="cartItems">{item.name}</span><span className="cartItems">{item.quantity}</span><span className="cartItems">${item.price}</span>{!purchase && <button onClick={()=>removeProduct(item.id)} class="btn btn-danger deleteButton"><i class="bi bi-trash"></i></button>}</div></>)
        ) : (
          <div>No hay productos en el carrito</div>
        )}
        {cartItems.length > 0 && <div><span>Product Quantity: {getTotalQuantity()}</span><span>Total: ${getTotal()}</span></div>}
        {cartItems.length > 0 && !purchase && <div className="d-flex justify-content-center"><button className="btn btn-secondary deleteButton" onClick={()=>clearCart()}>Clear Cart</button>
        <button onClick={()=>startPurchase()} className="btn btn-success deleteButton">Start Purchase</button></div>}
        {purchase && <div>
          <form className="d-flex justify-content-center flex-column align-items-center"><label>Name:</label><input type="text"></input>
          <label>Last Name:</label><input type="text"></input>
          <label>Telephone:</label><input type="text"></input>
          <label>Email:</label><input type="text"></input>
          <button type="submit" className="btn btn-success deleteButton">Finish Purchase</button>
            </form></div>}
      </div>
      </div>
    </div>
  );
};

export default CartContainer;
