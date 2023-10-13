import Icon from '../icons_assets/Logo.svg'
import Instagram from '../icons_assets/Instagram_Glyph_Black.png'
import Facebook from '../icons_assets/facebook-icon.svg'
import Tiktok from '../icons_assets/tiktok_logo_icon_214624.png'

function Footer() {
    return (
        <footer>
            <aside class="socials">
                <img class="icon" src={Icon} alt="" />
                <div class="icons">
                    <img src={Instagram}/>
                    <img src={Facebook} />
                    <img src={Tiktok}/>
                </div>
            </aside>
            <div class="info">
                <header>
                    <h1>Contact</h1>
                </header>
                <ul>
                    <li>8859 Brown StreetRockford, MI 49341</li>
                    <li>9325 Military StreetSan Pablo, CA 94806</li>
                    <li>(206) 342-8631</li>
                    <li>info@company.com</li>
                </ul>
            </div>
            <div class="info">
                <header>
                    <h1>Help</h1>
                </header>
                <ul>
                    <li>Hyper link 1</li>
                    <li>Hyper link 2</li>
                    <li>Hyper link 3</li>
                    <li>Hyper link 4</li>
                    <li>Hyper link 5</li>
                    </ul>
            </div>
        </footer>
    );
};

export default Footer;