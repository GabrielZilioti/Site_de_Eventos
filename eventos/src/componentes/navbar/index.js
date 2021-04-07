import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar(){
    const dispatch = useDispatch();
    return(

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src="logo3.png" className="img-fluid" style={{maxHeight:50}} style={{maxWidth:50}} href="/"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars text-white"></i>
            </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
           {
              useSelector(state => state.usuarioLogado) > 0 ?
              <>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="eventocadastro">Publicar Evento</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="">Meus Eventos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={() => dispatch({type: 'LOG_OUT'})}>Sair</a>
                </li>
              </>
              :
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/novousuario">Cadastrar</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/login">Login</a>
                  </li>
                </>
              
             
}
        </ul>
           </div>
      </div>
</nav>

    )
}

export default Navbar;