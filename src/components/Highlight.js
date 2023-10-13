import { Divider, Typography } from '@mui/material'

function Highlight() {
    return (
        <div class="highlight">
            <Typography variant="h1" component='h1'>
                We offer You best quality
            </Typography>
            <div width='100%'>
                <p class="text">
                    <span class="big">100+ </span> <span class="fade">businesses</span><br /><span class="category">saved</span>
                </p>
                <Divider orientation="vertical" flexItem
                sx={{
                    borderColor: 'rgba(161, 161, 161, 0.5)',
                }} />
                <p class="text">
                    <span class="big">100+ </span> <span class="fade">years</span><br /><span class="category">on the market</span>
                </p>
                <Divider orientation="vertical" flexItem
                sx={{
                    borderColor: 'rgba(161, 161, 161, 0.5)',
                }} />
                <p class="text">
                     <span class="big">100+ </span> <span class="fade">employees</span><br /><span class="category">of staff</span>
                </p>
            </div>
        </div>
    );
};

export default Highlight;