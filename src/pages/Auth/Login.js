import React from 'react';
import './auth.css'

const Login = () => {
    return (
        <form action="">
            <div className="group">
                <label htmlFor="login">Identifiant</label>
                <input type="text" name="login" id="" />
            </div>
            <div className="group">
                <label htmlFor="password">Mot de passe</label>
                <input type="text" name="password" id="" />
            </div>
            <div className="group"></div>
            <button>Coonexion</button>
        </form>
    );
};

export default Login;