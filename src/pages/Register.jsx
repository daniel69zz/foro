import RegisterCard from "../components/register/RegisterCard";
import styles from "./Register.module.css"

export default function(){
    return(
        <main className={styles.content}>
            <div className={styles.contentLoginCard2}>
                <RegisterCard/>
            </div>
        </main>
    )
}