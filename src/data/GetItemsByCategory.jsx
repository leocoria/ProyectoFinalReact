import React, { useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const GetItemsByCategory = (props) => {
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "items"), where("categoryId", "==", id));

    getDocs(q).then((snapshot) => {
      if (snapshot === 0) {
        console.log("No hay resultados");
      }
      props.setItems(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [id]);
};

export default GetItemsByCategory;
