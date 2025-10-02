import Button from "../comun/Button";
import {Badge} from "../comun/Badge";
import {Avatar, AvatarImage, AvatarFallback} from "../comun/Avatar";
import styles from "./LoginCard.module.css"


export default function LoginCard(){
    return(
        <form>
            <div>
                <label htmlFor="user">Usuario:</label>
                <input type="text" id="user" placeholder="Usuario"/>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" placeholder="Contraseña"/>
            </div>
            <div>
                <Button text="Iniciar Sesion"/>

                <div>
                    <label htmlFor="register">No tienes una cuenta?</label>
                    <Button text="Registrarse"/>
                </div>
            </div>
        </form>
    );
}

