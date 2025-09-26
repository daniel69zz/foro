import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main className='register'>
            <h1 className='registerTitle'>CREAR UNA CUENTA</h1>
            <form className="registerForm">
                <label htmlFor="username">Nombre de Usuario:</label>
                <input type="text" id='username' name='username' onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="email">Direccion de Correo:</label>
                <input type="text" name='email' id='email' onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                
                <button className='registerBtn'>REGISTRAR</button>
                <p>
                    Tienes una cuenta? <a href="">Inicie Sesión</a>
                </p>
            </form>
        </main>
    )
}

export default Register;