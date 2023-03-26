import React, { useContext, useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from "../Context/CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {

  const { cartItems, clearCart, getTotal, getTotalQuantity} = useContext(CartContext);
  const navigate=useNavigate();

  const [buyerName, setBuyerName] = useState("")
  const [buyerLastName, setBuyerLastName] = useState("")
  const [buyerPhone, setBuyerPhone]= useState("")
  const [buyerEmail, setBuyerEmail] = useState("")
  const [buyerEmailCheck, setBuyerEmailCheck] = useState("")

  const db=getFirestore();
  const ordersCollection = collection(db, 'orders');

  const MySwal = withReactContent(Swal)

  const resetForm = () => {
    setBuyerName('');
    setBuyerLastName('');
    setBuyerPhone('');
    setBuyerEmail('');
    clearCart();
  };

  const handleSubmit=(e)=>{

    e.preventDefault();

    if(buyerEmail!==buyerEmailCheck){
      Swal.fire({
        icon: 'error',
        title: 'Los correos no coinciden',
        text: 'Verifique nuevamente su correo',
      })
    } else{
      MySwal.fire({
        title: <p>Finalizando compra</p>,
        html: <p>Estamos procesando su orden</p>,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          MySwal.showLoading()
        },
      }).then(() => {
        return MySwal.fire(<p>Muchas gracias por su compra!</p>)
      })
      
      const order = {
        buyer: {
          name: buyerName,
          lastName: buyerLastName,
          phone: buyerPhone,
          email: buyerEmail
        },
        items: cartItems,
        total: getTotal()
      };
  
  
      addDoc(ordersCollection, order)
        .then((docRef) => {
          console.log('Documento enviado. ID:', docRef.id);
          resetForm();
          navigate("/");
        })
        .catch((e) => {
          console.log('Error al agregar el documento', e);
        });
    }

   
  
  }

  

  return (
    <div>
          <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column align-items-center"><label className="labels">Nombre:</label><input type="text" value={buyerName} onChange={(e)=>setBuyerName(e.target.value)}></input>
          <label className="labels">Apellido:</label><input type="text" value={buyerLastName} onChange={(e)=>setBuyerLastName(e.target.value)} ></input>
          <label className="labels">Telefono:</label><input type="text" value={buyerPhone} onChange={(e)=>setBuyerPhone(e.target.value)}></input>
          <label className="labels">Email:</label><input type="text" value={buyerEmail} onChange={(e)=>setBuyerEmail(e.target.value)}></input>
          <label className="labels">Repita su Email:</label><input type="text" value={buyerEmailCheck} onChange={(e)=>setBuyerEmailCheck(e.target.value)}></input>
          <button type="submit" className="btn btn-success buttons">Finalizar compra</button>
            </form>
     </div>
  )
}

export default OrderForm