import React from 'react';
import './index.css';

const Login = () => {

    return (
        <div className="form-container">

            <form className="form-signin">
                <img className="mb-4" src="logo192.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <label htmlFor="inputEmail" className="sr-only">Endereço de E-mail</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Endereço de E-mail" required autofocus />

                <label htmlFor="inputPassword" className="sr-only">Palavra-passe</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Palavra-passe" required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Lembrar-me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
    <p className="mt-5 mb-3 text-muted">&copy; 2019-{new Date().getFullYear()}</p>
            </form>
        </div>
    )
}
export default Login;