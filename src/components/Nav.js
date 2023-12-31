import Logo from "../icons_assets/Logo.svg"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <img src={Logo} />
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Menu</Link>
                </li>
                <li>
                    <Link to='/reservation'>Reservations</Link>
                </li>
                <li>
                    <Link to='/'>Order online</Link>
                </li>
                <li>
                    <Link to='/'>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;