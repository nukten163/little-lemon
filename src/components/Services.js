import Icon from "../icons_assets/Dish icon.svg"
import { Typography } from '@mui/material'

function Services() {
    return (
        <article class="services">
            <Typography className="green" component="h3"
            sx={{
                fontSize: '40px',
                fontFamily: 'Markazi Text',
            }}>
                Our services
            </Typography>
            <div class='flex-layout'>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 1</h1>
                </header>
            </div>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 2</h1>
                </header>
            </div>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 3</h1>
                </header>
            </div>
            <div class="container">
                <div class="icon">
                    <img src={Icon} alt=""  />
                </div>
                <header>
                    <h1>Service 4</h1>
                </header>
            </div>
            </div>
        </article>
    );
};

export default Services;