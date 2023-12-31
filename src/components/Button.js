import { Button } from '@mui/material'

function Clicker(props) {
    return (
        <Button disableRipple variant='solid' aria-label='on click'
        sx={{
            color: '#000',
            bgcolor: '#F4CE14',
            '&:hover': {bgcolor: '#F4CE14'},
            width: 300,
            fontFamily: 'Inter',
            fontSize: '25px',
            fontWeight: 'medium',
            textTransform: 'none',
            borderRadius: '15px',
            padding: '0px 16px',
        }}
        type={props.type}
        disabled={props.disabled}>
            {props.content}
        </Button>
    );
};

export default Clicker;