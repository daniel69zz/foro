import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './Login.css';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main className="login">
            <h1 className="loginTitle">Ingrese su cuenta</h1>
            <form className="loginForm">
                <label htmlFor="email">Dirección Email:</label>
                <input type="text" name="email" id="email" />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" />
                <button className="loginBtn">Iniciar Sesión</button>
                <p>
                    No tienes una cuenta? <a href="">Crea una</a>
                </p>

            </form>
        </main>
    );
}

export default Login;