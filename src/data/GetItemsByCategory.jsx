import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import { useParams } from 'react-router-dom'

const GetItemsByCategory = () => {

  const {id}=useParams()
  const [items, setItems] = useState()

  useEffect(() => {
    const db = getFirestore()

    const q = query(
      collection(db, 'items'),
      where('categoryId', {id}), 
    )

    getDocs(q).then((snapshot) => {
      if(snapshot === 0){
        console.log("No hay resultados")
      }
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
    })
  }, [])

  
}

export default GetItemsByCategory