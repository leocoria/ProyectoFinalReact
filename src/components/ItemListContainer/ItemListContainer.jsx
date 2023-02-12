import React from 'react'


const ItemListContainer = (props) => {
  return (
    <div class="alert alert-dark text-center" role="alert">
  {props.greeting}
</div>
  )
}

export default ItemListContainer