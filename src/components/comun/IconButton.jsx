import {X} from "lucide-react";
import styles from "./IconButton.module.css"
import { NavLink } from "react-router-dom";

export default function IconButton({className, ...props}) {
    return(
        <NavLink to={props.to} style={{marginLeft: "auto"}}>
                <button
                className={styles.btn}
                >
                <X
                    size={20}
                    className={styles.icon}
                />
                </button>
        </NavLink>  
    )
}