
import styles from './button.module.css'

export default function Button({variant="primary",children, ...props}) {
    return (<button className={styles[variant]} {...props}>{children}</button>)
}