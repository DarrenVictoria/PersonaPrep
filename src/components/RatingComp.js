import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';

const RatingComp = ({onclick, color, icon: Icon}) => {
    return ( 
        <Grid item xs={2}  px={2} >
            <IconButton onClick={onclick} style={{ width:'22px', height:'22px'}}>
                <Icon color={color} />
            </IconButton>
        </Grid>
     );
}
 
export default RatingComp;