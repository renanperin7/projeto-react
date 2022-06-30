import styles from './Contact.module.css'

function Contact() {
    return (
        <div className={styles.home_container}>
            <h1>Entre em <span>contato</span> comigo</h1>
            <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
                <h3>Face<span>book</span></h3>
            </a>
            <a href='https://www.instagram.com/perin_renan/' target="_blank" rel="noreferrer">
                <h3>Insta<span>gram</span></h3>
            </a>
            <a href="https://www.linkedin.com/in/renan-perin-ribeiro-483443231/" target="_blank" rel="noreferrer">
                <h3>Linked<span>in</span></h3> 
            </a>            
        </div>
    )
}

export default Contact