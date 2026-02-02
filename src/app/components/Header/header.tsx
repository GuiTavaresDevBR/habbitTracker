import styles from './header.module.css'

export default function Header(){
    return (
        <header className={styles.header}>
            <h1>Habbit Tracker</h1>
            <div>
                <button> X </button>
            </div>
        </header>
    )
}
