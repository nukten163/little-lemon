import Image from '../icons_assets/restauranfood.jpg'
import Clicker from './Button';
import { Typography } from "@mui/material"
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <article class="heroSection">
            <aside>
                <header>
                    <Typography variant="h1" component='h1' >
                        Little Lemon
                    </Typography>
                    <Typography variant="h2" component='h2'>
                        Seoul
                    </Typography>
                </header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                <Clicker content={<Link to='/reservation'>Start Now</Link>} type="button" disabled={false} />
            </aside>
            <img class="coverImage" src={Image} alt="Dish"/>
      </article>
    );
};

export default HeroSection;