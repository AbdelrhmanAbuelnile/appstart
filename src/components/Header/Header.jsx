import logo from "../../assets/Appstart.png"
import Menu from "./Menu"
import { Link } from "react-router-dom"

import '../../footer.css'

function Header(){
    return(
        <header
            className="bg-primary w-full py-4 px-4 lg:px-28 fixed flex flex-row justify-between items-center z-10"
        >

            <Link
                className="flex flex-row justify-center items-center gap-2 text-2xl text-third hover:text-white duration-150 font-bold"
                to={'/'} 
            >
                <img src={logo} alt="app start logo" className="w-8"/>
                <span className="mb-2">Appstart</span>
            </Link>
            
            <nav>
                <Menu />
                <ul className="hidden  lg:flex lg:flex-row justify-center items-center gap-8 text-xl text-third font-medium">
                    <li>
                        <Link
                         to={"/"} 
                         className="hover:text-white duration-150"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/about"}
                            className="hover:text-white duration-150"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:text-white duration-150"
                            to={"/portfolio"}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to={"/services"}
                            className="hover:text-white duration-150"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/contact"}
                            className="hover:text-white duration-150"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header