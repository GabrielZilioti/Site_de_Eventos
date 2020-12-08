import React, { useState} from 'react';
import './login.css'
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
        }).catch(error => {
            setMsgTipo('erro');
        });
    }

    return(
        <div className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 fw-bold text-white">Login</h1>
                    
                        <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />   
                        <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                    
                    <button onClick={logar} className="w-100 btn btn-lg btn-block btn-login" type="button">Logar</button>
                    
                    <div className="msg-login text-white my-5">

                        {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Você esta conectado! &#128077; </span>}
                        {msgTipo === 'erro' &&  <span><strong>OPS!</strong> Verifique o Email e a Senha &#128078; </span>}
                        
                    </div>

                    <div className="opcoes-login mt-5">
                        <a href="#" className="mx-2">Recuperar Senha</a>
                        <span className="text-white">&#9737;</span>
                        <a href="#" className="mx-2">Quero Cadastrar</a>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Login;