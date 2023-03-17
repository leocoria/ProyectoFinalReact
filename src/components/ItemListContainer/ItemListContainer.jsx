import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import GetItemsByCategory from "../../data/GetItemsByCategory";
import GetItems from "../../data/GetItems";

const ItemListContainer = (props) => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  return (
    <>
      <div
        class="alert alert-dark text-center"
        role="alert"
        style={{ margin: "0" }}
      >
        {props.greeting}
      </div>
      <div>
        {id ? (
          <>
            <GetItemsByCategory setItems={setItems} />
            {items.length > 0 ? (
              <ItemList items={items} />
            ) : (
              <>
                <div className="d-flex justify-content-center">
                  <div
                    class="spinner-border text-primary"
                    style={{ height: "100px", width: "100px" }}
                    role="status"
                  ></div>
                  <h3 style={{ fontSize: "35px" }}>Loading.....</h3>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <GetItems setItems={setItems} />
            {items.length > 0 ? (
              <ItemList items={items} />
            ) : (
              <p style={{ fontSize: "35px" }}>Loading.....</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
