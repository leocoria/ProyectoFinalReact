import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import GetItemsByCategory from "../../data/GetItemsByCategory";
import GetItems from "../../data/GetItems";

const ItemListContainer = (props) => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  console.log(items);

  return (
    <>
      <div class="alert alert-dark text-center" role="alert">
        {props.greeting}
      </div>
      <div>
        {id ? (
          <>
            <GetItemsByCategory setItems={setItems} />
            <ItemList items={items} />
          </>
        ) : (
          <>
            <GetItems setItems={setItems} />
            <ItemList items={items} />
          </>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
