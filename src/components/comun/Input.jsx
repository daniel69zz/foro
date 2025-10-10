import cn from "../utils/cn";
import styles from "./Input.module.css"
import {Home} from "lucide-react";

export default function Input({id, className, labelText, icon, placeholderText, tipo="default", className2, className3, ...props}){
    const IconComponent = icon || Home;
    return(
        <div className={cn(styles.inputContainer, className)} data-tipo={tipo}>
            <label htmlFor={id} className={cn(styles.inputLabel, className)}>{labelText}</label>
            <div className={cn(styles.inputWrapper, className2)}>
                <div className={cn(styles.inputInner, className3)}>
                    <IconComponent className={styles.inputIcon} />
                    <input id={id} placeholder={placeholderText} {...props}/>
                </div>
            </div>
        </div>
    );
}