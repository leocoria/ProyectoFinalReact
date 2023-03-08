import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemList.css";

const ItemList = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProductos(data));
    console.log(productos);
  }, []);

  return (
    <>
      <div className="contenedorTarjetas">
        {productos.products?.map((producto) => (
          <div class="card" className="cardSize">
            <img src={producto.thumbnail} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{producto.title}</h5>
              <p class="card-text">{producto.description}</p>
              <a id={producto.id} href="#" class="btn btn-primary">
                Ver Detalles
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
