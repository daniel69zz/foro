import styles from "./Button.module.css";
import cn from "../utils/cn";

export default function Button({className, variant = "default", 
    size = "md", asChild = false, text, onClick, ...props}){
    return(
        <button
            className={cn(styles.btn, className)}
            data-variant={variant}
            data-size={size} 
            onClick={onClick}
            {...props}
        >{text} 
        </button>   
    );
}

