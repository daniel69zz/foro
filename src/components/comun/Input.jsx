import cn from "../utils/cn";
import styles from "./Input.module.css"
import {Home} from "lucide-react";

export default function Input({id, className1, className2, className3, className4,
    labelText, icon, placeholderText, tipo="default", ...props}){
    const IconComponent = icon || Home;
    return(
        <div className={cn(styles.inputContainer, className1)} data-tipo={tipo}>
            <label htmlFor={id} className={cn(styles.inputLabel, className2)}>{labelText}</label>
            <div className={cn(styles.inputWrapper, className3)}>
                <div className={cn(styles.inputInner, className4)}>
                    <IconComponent className={styles.inputIcon} />
                    <input id={id} placeholder={placeholderText} {...props}/>
                </div>
            </div>
        </div>
    );
}