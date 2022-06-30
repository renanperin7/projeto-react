import styles from './Company.module.css'
import renan from "../../img/renanperin.jpeg"

function Company() {
    return (
        <div className={styles.home_container}>
            <h1>Renan Perin <span>Company</span></h1>
            <p>Estudante de React.js, querendo aprender tudo sobre este framework!</p>
            <img src={renan} alt = "Renan"/>
        </div>
    )
}

export default Company