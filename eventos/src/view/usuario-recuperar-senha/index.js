import React, { useState } from 'react';
import './usuario-recuperar-senha.css';

import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../componentes/navbar';

function UsuarioRecuperarSenha(){


    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
            setMsg('Enviamos um link de recuperação de senha no seu e-mail');
        } ).catch(erro =>{
            setMsg('Verifique se o e-mail está correto!');
        })
    }

    return(
        <>
            <Navbar/>
                <form className="text-center form-login mx-auto mt-5">
                    <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my=2" placeholder="Email"></input>

                    <div className="msg my-4 text-center">
                         <span>{msg}</span>
                    </div>

                    <button onClick={recuperarSenha} type="button" className="btn bnt-lg btn-block btn-enviar">Recuperar Senha</button>
                </form>

    
        </>
    )
}

export default UsuarioRecuperarSenha;