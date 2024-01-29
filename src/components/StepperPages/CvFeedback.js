import React from 'react';
import { useState } from 'react';
import CustomRating from '../FaceIconRating';

import './css/personalInfo.css';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


const CvFeedback = () => {
    const [item1Rating, setItem1Rating] = useState(5);
    const [item2Rating, setItem2Rating] = useState(5);
    const [item3Rating, setItem3Rating] = useState(5);
    return(
        <div>
            {/* CustomRating component for item 1 */}
            <CustomRating value={item1Rating} onChange={setItem1Rating} /><br/>
            
            {/* CustomRating component for item 2 */}
            <CustomRating value={item2Rating} onChange={setItem2Rating} /><br/>
            
            {/* CustomRating component for item 3 */}
            <CustomRating value={item3Rating} onChange={setItem3Rating} /><br/>

            <div className="personalInfo-main">
                <div className="personalInfo-leftCol">
                    <Grid container>
                        <Grid container sx={{backgroundColor: 'white', width: '350px'}} mb={3}py={2}>
                            <Grid item xs={2}  px={2} >
                                <IconButton  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                    <AddIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} px={2} >
                                <IconButton  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                    <AddIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} px={2} >
                                <IconButton  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                    <AddIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} px={2} >
                                <IconButton  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                    <AddIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2}  px={2} >
                                <IconButton  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                    <AddIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2}  px={2} >
                                <IconButton  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px', marginRight: '15px' }} >
                                    <AddIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                        </Grid>
                    </Grid>                    
                </div>
                <div className="personalInfo-rightCol">
                    <Grid container>
                        <Grid container>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                            <Grid item xs={2}>hey</Grid>
                        </Grid>
                    </Grid>                    
                </div>
            </div>

        </div>
    )

}
export default CvFeedback