import styles from "./Button.module.css";
import cn from "../utils/cn";
import {NavLink} from "react-router-dom";


export default function Button({className, variant = "default", 
    size = "md", text, onClick, ...props}){
  
        return(
        <NavLink to={props.to}>
            <button 
            className={cn(styles.btn, className)}
            data-variant={variant}
            data-size={size} 
            onClick={onClick}    
            >
                {text}
            </button>
        </NavLink>
    );
}

