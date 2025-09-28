import Button from "../comun/Button";
import Badge from "../comun/Badge"
import styles from "./LoginCard.module.css"

export default function LoginCard(){
    return(
        <div className={styles.contentLoginCard}>
            <Button text="Boton1" onClick={() => alert("oziel")}/>
            <Badge text="# Etiqueta"/>
        </div>
    )
}