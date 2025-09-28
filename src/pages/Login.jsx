import LoginCard from "../components/login/LoginCard";
import styles from "./LoginPage.module.css"

export default function(){
    return(
        <main className={styles.content}>
            <div className={styles.contentLoginCard2}>
                <LoginCard/>
            </div>
        </main>
    )
}