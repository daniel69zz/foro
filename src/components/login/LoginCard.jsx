import styles from "./LoginCard.module.css"
import Input from "../comun/Input";
import Texto from "../comun/Texto";
import Button from "../comun/Button";
import Line from "../comun/Line";
import {User, Mail, Lock} from "lucide-react";
import Link from "../comun/Link";
import IconButton from "../comun/IconButton";


export default function LoginCard(){
    return(
        <div className={styles.contentLoginCard}>
            <IconButton className={styles.botonCerrar}/>
            <Texto texto="Bienvenido de vuelta" icono={User} className={styles.texto1} iconClassName={styles.icono1}/>
            <Texto texto="Ingresa a tu cuenta para poder interactuar en el foro" hasAnIcon={false} className={styles.texto2}/>
            <Input id="input1" icon={Mail} placeholderText='Ingresa tu email' labelText="Email" />
            <Input id="input2" icon={Lock} placeholderText='Ingresa tu contraseña' labelText="Password" type="password" tipo="tipo1"/>
            <Link href="https://google.com" external className={styles.link1}>La olvidaste?</Link>
            <Button text="Iniciar Sesion" className={styles.boton1} data-variant="login" size="login"/>
            <Line/>
            <Texto texto="Ingresa tu contraseña"/>
        </div>
    );
}

