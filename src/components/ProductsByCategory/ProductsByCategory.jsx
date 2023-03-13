import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./ProductsByCategory.css"

const ProductsByCategory = (props) => {
const {id}=useParams()
const [category, setCategory] = useState([])

useEffect(() => {
  fetch(`https://dummyjson.com/products/category/${id}`)
  .then((response) => response.json())
  .then((data) => setCategory(data));
}, [id])

  return (
    <>
    <div className="contenedorTarjetas">
      {category.products?.map((producto) => (
        <div class="card" className="cardSize">
          <img src={producto.thumbnail} class="card-img-top" style={{borderRadius: "10px", height:"10rem"}} alt="..."></img>
          <div class="card-body">
            <h5 class="card-title"style={{padding:"10px", fontWeight:"bold", textAlign:"center"}}>{producto.title}</h5>
            <p class="card-text">{producto.description}</p>
            <div class="d-flex justify-content-center"><button type="button" class="btn btn-primary" style={{margin: "20px"}}><Link to={`/item/${producto.id}`}>Ver detalles</Link></button></div>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default ProductsByCategory