import React from 'react';
import './login.css'

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    
                    
                    <div>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" />
                    </div>
                    
                    <div>    
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" />
                    </div>
                    
                    <button className="w-100 btn btn-lg btn-block btn-login" type="submit">Sign in</button>
                    
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
                </div>
            </form>
        </div>

    )
}

export default Login;