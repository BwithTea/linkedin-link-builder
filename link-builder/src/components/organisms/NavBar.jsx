
import Logo from '../atoms/logo.jsx'
import NavLinks from '../molecules/navLinks.jsx'

export default function NavBar() {
    return (
        <nav className="navbar" style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #000000ff",
            width: "100%",
            justifyContent: "space-between",
            paddingRight: "2rem"
        }}>
            <Logo src = "src/assets/logo.png" alt = "Brand Logo"/>
            <NavLinks />
        </nav>
       
    )
}