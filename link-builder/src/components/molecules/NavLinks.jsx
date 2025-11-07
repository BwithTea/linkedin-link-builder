import Button from '../atoms/button.jsx'
import styles from './NavLinks.module.css'

export default function NavLinks() {
    return (
        <div className={styles.navLinks}>
            {/* <Button type="button" onClick={() => alert('Sign in clicked!')} children={"Sign in"}/>
            <Button variant="secondary" type="button" onClick={() => alert('Sign up clicked!')} children={"Sign up"}/> */}
        </div>
    )
}