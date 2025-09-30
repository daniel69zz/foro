import Button from "../comun/Button";
import Badge from "../comun/Badge";
import {Avatar, AvatarImage, AvatarFallback} from "../comun/Avatar";
import styles from "./LoginCard.module.css"


export default function LoginCard(){
    return(
        <div className={styles.contentLoginCard}>
            <Button text="BOTON OZIEL" onClick={() => alert("oziel")}/>
            <Badge text="# Etiqueta"/>
            <Avatar data-size="xl"  ring>
                <AvatarImage src="ozi.png" />
                <AvatarFallback>DR</AvatarFallback>
            </Avatar>

        </div>
    );
}