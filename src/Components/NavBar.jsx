import Logo from './Logo'
import './NavBar.css'
function NavBar() {
    return (
       
    <nav className="navbar">
      <Logo/>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

            
        
    )
}

export default NavBar
