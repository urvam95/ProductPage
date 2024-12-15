import Logo from './Logo'
import './NavBar.css'
import { IoSearchCircleOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
function NavBar() {
    return (
       
    <nav className="navbar">
      <Logo/>
      <ul className="nav-links">
                <li className='dropdown'><a href="#">Eyes</a>
                    <div className='dropdown-content'>
                        <ul className='dropdown-content'>

                           <li>
                            <a href='#'>Mascara</a>
                            </li>
                            <li>
                            <a href='#'>Brows</a>
                            </li>
                             <li>
                            <a href='#'>Eye Shadow</a>
                            </li>
                             <li>
                            <a href='#'>Falsies</a>
                            </li>
                           
                            
                        </ul>

                    </div>
                </li>
                <li className='dropdown'><a href="#">Lips</a>
                     <div className='dropdown-content'>
                        <ul className='dropdown-content'>

                           <li>
                            <a href='#'>Lipsticks</a>
                            </li>
                            <li>
                            <a href='#'>Lip Balms</a>
                            </li>
                             <li>
                            <a href='#'>Lip Liners</a>
                            </li>
                             <li>
                            <a href='#'>Plummer</a>
                            </li>
                           
                            
                        </ul>

                    </div>
                </li>
                <li className='dropdown'><a href="#">face</a>
                     <div className='dropdown-content'>
                        <ul className='dropdown-content'>

                           <li>
                            <a href='#'>Foundation</a>
                            </li>
                            <li>
                            <a href='#'>Primer</a>
                            </li>
                             <li>
                            <a href='#'>Setting Spray</a>
                            </li>
                             <li>
                            <a href='#'>Blush on</a>
                            </li>
                           
                        </ul>

                    </div>
                </li>
                <li><a href="#">Sale</a></li>
               
            </ul>
            <ul className='nav-links'>
                 <li><a  href='#'><IoSearchCircleOutline size={40} /></a></li>
                <li><a href='#'><MdOutlineAccountCircle size={35}/></a></li>
                <li><a href='#'> <FaCartArrowDown size={35}/> </a></li>
                
            </ul>
    </nav>

            
        
    )
}

export default NavBar
