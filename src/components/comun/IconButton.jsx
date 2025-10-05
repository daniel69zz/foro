import {X} from "lucide-react";
import styles from "./IconButton.module.css"
import cn from "../utils/cn";

export default function IconButton({className}) {
    return(
        <button
        className={cn(styles.btn, className)}
        aria-label="Cerrar"
        >
        <X
            size={20}
            className={styles.icon}
        />
        </button>    
    )
}