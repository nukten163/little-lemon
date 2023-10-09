import Logo from "../icons_assets/Logo.svg"

function Nav() {
    return (
        <nav>
            <img alt="" src={Logo} />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
};

export default Nav;