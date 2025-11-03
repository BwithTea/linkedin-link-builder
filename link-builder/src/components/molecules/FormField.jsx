
import styles from './formField.module.css'

export default function FormField({children}) {
    return (
        <div className={styles.field}>{children}</div>
    )
}