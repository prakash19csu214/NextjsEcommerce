import styles from '../styles/Footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>
                Next.js app with a&nbsp;<a href="#">NextCart</a>&nbsp;
            </p>
            <div className={styles.footer__left}>
                <a href="github.com/prakash19csu214">Github</a>
            </div>
        </footer>
    )
}