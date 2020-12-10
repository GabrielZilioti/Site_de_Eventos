import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';

function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <spam className="navbar-brand text-white fw-bold">Eventos</spam>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-white"></i>
            </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/novousuario">Cadastrar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/login">Login</a>
          </li>
        </ul>
           </div>
      </div>
</nav>

    )
}

export default Navbar;