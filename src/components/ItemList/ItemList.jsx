import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = (props) => {
  return (
    <>
      <div className="contenedorTarjetas">
        {props.items?.map((item) => (
          <div class="card" className="cardSize">
            {item.img ? (
              <img
                src={item.img}
                class="card-img-top"
                style={{ borderRadius: "10px", height: "10rem" }}
                alt="..."
              ></img>
            ) : (
              <p>Loading...</p>
            )}

            <div class="card-body">
              <h5
                class="card-title"
                style={{
                  padding: "10px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.name}
              </h5>
              <p class="card-text">{item.description}</p>

              <div class="d-flex justify-content-center">
                <button
                  key={item.id}
                  type="button"
                  class="btn btn-primary"
                  style={{ margin: "20px" }}
                >
                  <Link to={`/item/${item.id}`}>Ver detalles</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
