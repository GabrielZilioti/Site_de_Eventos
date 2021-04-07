import React, { useState } from 'react';
import './login.css'
import {Link, Redirect} from 'react-router-dom';


import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../componentes/navbar';

import { useSelector, useDispatch } from 'react-redux';


function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() =>{
                dispatch({type: 'LOG_IN', usuarioEmail: email});
            },2000
            );
            
        }).catch(erro => {
            setMsgTipo('erro');
        });

    }

    return(
        <>
        <div className="login-content d-flex align-items-center">
            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}
                <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <img src="logo3.png" className="img-fluid"/>
                    <h1 className="h3 mb-3 fw-bold text-white">Login</h1>
                    
                        <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />   
                        <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                    
                    <button onClick={logar} className="w-100 btn btn-lg btn-block btn-login" type="button">Logar</button>
                    
                    <div className="msg-login text-white my-5">

                        {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Você esta conectado! &#128077; </span>}
                        {msgTipo === 'erro' &&  <span><strong>OPS!</strong> Verifique o Email e a Senha &#128078; </span>}
                        
                    </div>

                    <div className="opcoes-login mt-5">
                        <Link to='/usuariorecuperarsenha' className="mx-2">Recuperar Senha </Link>
                        <span className="text-white">&#9737;</span>
                        <Link to='novousuario' className="mx-2">Quero Cadastrar</Link>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;