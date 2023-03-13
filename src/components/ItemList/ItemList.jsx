import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <>
      <div className="contenedorTarjetas">
        {productos.products?.map((producto) => (
          <div class="card" className="cardSize">
            <img src={producto.thumbnail} class="card-img-top" style={{borderRadius: "10px", height:"10rem"}} alt="..."></img>
            <div class="card-body">
              <h5 class="card-title" style={{padding:"10px", fontWeight:"bold", textAlign:"center"}}>{producto.title}</h5>
              <p class="card-text">{producto.description}</p>
              
              <div class="d-flex justify-content-center"><button key={producto.id} type="button" class="btn btn-primary" style={{margin: "20px"}}><Link to={`/item/${producto.id}`}>Ver detalles</Link></button></div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
