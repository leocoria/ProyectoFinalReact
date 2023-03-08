import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  return (
    <>
      <div class="alert alert-dark text-center" role="alert">
        {props.greeting}
      </div>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
