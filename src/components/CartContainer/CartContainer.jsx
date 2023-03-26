import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./CartContainer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OrderForm from "../OrderForm/OrderForm";

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
          cartItems?.map((item) => <><div className="d-flex justify-content-between w-75 bg-white"><img className="smallItemImg" src={item.img}></img><span className="cartItems">{item.name}</span><span className="cartItems">{item.quantity}</span><span className="cartItems">${item.price}</span>{!purchase && <button onClick={()=>removeProduct(item.id)} class="btn btn-danger buttons"><i class="bi bi-trash"></i></button>}</div></>)
        ) : (
          <div>No hay productos en el carrito</div>
        )}
        {cartItems.length > 0 && <div><span style={{fontWeight:800}}>Productos: </span><span>{getTotalQuantity()}</span><span style={{fontWeight:800}}>  Total: </span><span>${getTotal()}</span></div>}
        {cartItems.length > 0 && !purchase && <div className="d-flex justify-content-center"><button className="btn btn-secondary buttons" onClick={()=>clearCart()}>Vaciar Carrito</button>
        <button onClick={()=>startPurchase()} className="btn btn-success buttons">Iniciar compra</button></div>}
        {purchase && cartItems.length > 0 &&<OrderForm></OrderForm>}
      </div>
      </div>
    </div>
  );
};

export default CartContainer;
