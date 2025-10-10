import styles from "./LoginCard.module.css"
import Input from "../comun/Input";
import {Texto} from "../comun/Texto";
import Button from "../comun/Button";
import Line from "../comun/Line";
import {User, Mail, Lock} from "lucide-react";
import IconButton from "../comun/IconButton";


export default function LoginCard(){
    return(
        <div className={styles.contentLoginCard}>
            <IconButton className={styles.botonCerrar}/>
            <Texto icono={User} className={styles.texto1} iconClassName={styles.icono1}>
                Bienvenido de vuelta
            </Texto>
            <Texto hasAnIcon={false} className={styles.texto2}>
                Ingresa a tu cuenta para poder interactuar en el foro
            </Texto>
            <Input id="in_email" icon={Mail} placeholderText='Ingresa tu email' labelText="Email" />
            <Input id="in_hash" icon={Lock} placeholderText='Ingresa tu contraseña' labelText="Password" type="password" tipo="tipo1"/>
            <Input id="in_hash" icon={Lock} placeholderText='Confirma tu contraseña' labelText="Confirmar Password" type="password" tipo="tipo1"/>
            <Button className={styles.boton1} data-variant="login" size="login">
                Iniciar Sesion
            </Button>
            <Line/>
            <Texto>Ingresa tu contraseña</Texto>
        </div>
    );
}

