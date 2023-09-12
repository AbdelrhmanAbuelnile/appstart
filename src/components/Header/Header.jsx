import logo from "../../assets/Appstart-logo2.png"
import Menu from "./Menu"

function Header(){
    return(
        <header
            className="bg-primary w-full py-4 px-4 lg:px-28 fixed flex flex-row justify-between items-center z-10"
        >
            <img src={logo} alt="app start logo" className="w-8"/>
            <nav>
                <Menu />
                <ul className="hidden  lg:flex lg:flex-row justify-center items-center gap-8 text-xl text-third font-medium">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#sevices">Services</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header