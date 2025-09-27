import Button from "../comun/Button";
import styles from "./LoginCard.module.css"

export default function LoginCard(){
    function alerta(){
        alert("Oziel")
    }
    return(
        <div className={styles.contentLoginCard}>
            <Button text="Boton1" onClick={alerta}/>
        </div>
    )
}