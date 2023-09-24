import logo from "../../assets/Appstart.png"
import Menu from "./Menu"
import { Link } from "react-router-dom"

import '../../footer.css'

function Header(){
    return(
        <header
            className="bg-primary w-full py-4 px-4 lg:px-28 fixed flex flex-row justify-between items-center z-10"
        >

            <a
                className="flex flex-row justify-center items-center gap-2 text-2xl text-third hover:text-white duration-150 font-bold"
                href="#" 
            >
                <img src={logo} alt="app start logo" className="w-8"/>
                <span className="mb-2">Appstart</span>
            </a>
            
            <nav>
                <Menu />
                <ul className="hidden  lg:flex lg:flex-row justify-center items-center gap-8 text-xl text-third font-medium">
                    <li>
                        <a
                        href="#" 
                         className="hover:text-white duration-150"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-white duration-150"
                            href="#portfolio"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a 
                             href="#sevices"
                            className="hover:text-white duration-150"
                        >
                            Services
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header