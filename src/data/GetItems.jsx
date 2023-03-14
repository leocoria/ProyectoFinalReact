import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

const GetItems = (props) => {
  useEffect(() => {
    const db = getFirestore();
    const djRefCollection = collection(db, "items");

    getDocs(djRefCollection).then((snapshot) => {
      if (snapshot === 0) {
        console.log("No hay resultados");
      }
      props.setItems(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);
};

export default GetItems;
