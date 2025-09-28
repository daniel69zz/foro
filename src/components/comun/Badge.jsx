import styles from "./Badge.module.css";

export default function Badge({text}){
    return (
        <span className={styles.sp_tag} >
            {text}
        </span>
    )
}