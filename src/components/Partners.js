import Google from '../icons_assets/google.png'
import Dropbox from '../icons_assets/dropbox.png'
import Instagram from '../icons_assets/insta.png'
import LinkedIn from '../icons_assets/linkedin.png'
import { Typography } from '@mui/material'

function Partners() {
    return (
        <article class="partners">
            <Typography className="green" component="h3"
            sx={{
                fontSize: '40px',
                fontFamily: 'Markazi Text',
            }}>
                They trust us
            </Typography>
            <div class='grid-layout'>
                <div class="social">
                    <img src={Google} alt=""  />
                </div>
                <div class="social">
                    <img src={Dropbox} alt=""  />
                </div>
                <div class="social">
                    <img src={Instagram} alt=""  />
                </div>
                <div class="social">
                    <img src={LinkedIn} alt=""  />
                </div>
            </div>
        </article>
    );
};

export default Partners;