import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./ItemDetailContainer.css";
import { CartContext } from "../Context/CartContext";

const ItemDetailContainer = () => {
  const { cartItems, addProduct, removeProduct } = useContext(CartContext);
  const { id } = useParams();
  const [items, setItems] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const db = getFirestore();
    const modZap = doc(db, "items", id);

    getDoc(modZap).then((snapshot) => {
      if (snapshot.exists()) {
        setItems({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  return (
    <>
      <div
        class="d-flex justify-content-center"
        style={{ backgroundColor: "gainsboro", padding: "20px" }}
      >
        {items ? (
          <>
            <div class="card" style={{ width: "30rem", padding: "20px" }}>
              <img
                class="card-img-top"
                src={items.img}
                alt="Card image cap"
                style={{ height: "25rem" }}
              ></img>
              <div class="card-body">
                <h5 className="card-title titulo">{items.name}</h5>
                <p class="card-text">{items.description}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Price: ${items.price}</li>
                <li class="list-group-item">
                  Rating: {items.rating}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </li>
                <li class="list-group-item">Stock: {items.stock}</li>
              </ul>
              <div class="card-body">
                <div class="d-flex justify-content-center">
                  <button
                    className="changeQuantity"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <div className="divQuantity">{quantity}</div>
                  <button
                    className="changeQuantity"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => addProduct(items, quantity)}
                    class="btn btn-success"
                  >
                    Agregar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
