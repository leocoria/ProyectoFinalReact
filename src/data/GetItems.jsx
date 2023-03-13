import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useEffect, useState } from "react"

const GetItems = () => {

  const [items, setItems] = useState()

  useEffect(() => {
    const db = getFirestore()
    const djRefCollection = collection(db, 'items')

    getDocs(djRefCollection).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }    
    setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })

  }, [])

}

export default GetItems