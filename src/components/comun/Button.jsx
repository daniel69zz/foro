import styles from "./Button.module.css";
import cn from "../utils/cn";
import {NavLink} from "react-router-dom";


export default function Button({ children, className, variant = "default", 
    size = "md", asChild = false, text, onClick, ...props}){
    return(
        <NavLink to={props.to}>
            <button
                className={cn(styles.btn, className)}
                data-variant={variant}
                data-size={size} 
                onClick={onClick}
                {...props}
            >{children} 
            </button>  
        </NavLink> 
    );
}

