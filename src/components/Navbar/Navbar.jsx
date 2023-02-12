import React from 'react'
import logoStoica from '../../img/logo/logoStoica.png'
import CartWidget from '../CartWidget/CartWidget'
import '../Navbar.css'

const Navbar = () => {
  return (
    <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logoStoica} className="logo" alt="Logo Stoica" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kids</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
</header>
  )
}

export default Navbar