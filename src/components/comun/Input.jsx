import styles from "./Input.module.css"
import {Home} from "lucide-react";

export default function Input({id, className, labelText, icon, placeholderText, tipo="default", className2, className3, ...props}){
    const IconComponent = icon || Home;
    return(
        <div className={styles.inputContainer} data-tipo={tipo}>
            <label htmlFor={id} className={styles.inputLabel}>{labelText}</label>
            <div className={styles.inputWrapper}>
                <div className={styles.inputInner}>
                    <IconComponent className={styles.inputIcon} />
                    <input id={id} placeholder={placeholderText} {...props}/>
                </div>
            </div>
        </div>
    );
}