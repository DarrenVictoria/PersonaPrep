import {useLocation}  from "react-router-dom";
import  React,{ useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import { collection, getFirestore, getDocs, doc, serverTimestamp } from 'firebase/firestore';

  
const ViewReviews = () => {
    const [place, setPlace] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const feedbackId = searchParams.get('id');
    
    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const db = getFirestore();
                const feedbackCol = collection(db, 'feedback');
                const querySnapshot = await getDocs(feedbackCol);
                querySnapshot.forEach((doc) => {
                    if(doc.id === feedbackId){
                        const feedbackData = doc.data();
                        setPlace(feedbackData.place || '');
                        setType(feedbackData.type || '');
                        setDescription(feedbackData.description || '');
                        setImageUrl(feedbackData.files[0].downloadURL || ' ');                        
                    }
                })
            }catch (err) {
                console.log("error fetching data" , err.message)
            }
        };

        fetchUserData();
    }, []);
  
return ( 
    <Box sx={{ display: 'flex'}}>
    <DashboardHeader />
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%" }} >
    <Toolbar />
        <Box sx={{ flexGrow: 1,minHeight:"950px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2,sm: 2 }}
              columns={{ md: 12 }}
              sx={{
              display: "flex",
              justifyContent: "center",
              }}
            >
                <Grid item xs={12} textAlign={"left"} sx={{paddingBottom:"20px"}}>
                        <Button
                        variant="contained" 
                        sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                        onClick={() => window.location.href = '/reviews'}
                        >
                            Back
                        </Button>
                </Grid>
                
                <Grid xs={12} sm={6} md={3} >            
                    <Card
                        sx={{
                        maxWidth: 387,
                        minHeight: 150,
                        bgcolor: "white",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        }}
                    >
                        <CardHeader
                        title="Place"
                         subheader={place}
                        sx={{
                            "& .MuiCardHeader-title": {
                            fontSize: "21px",
                            fontWeight: "bold",
                            
                            },
                            "& .MuiCardHeader-subheader": {
                            fontSize: "20px",
                            fontWeight: "bold",
                            paddingTop:"30px",
                            color: "black",
                            },
                        }}
                        />
                        
                    </Card>
                </Grid>

                <Grid xs={12} sm={6} md={3} >                
                    <Card
                        sx={{
                        maxWidth: 387,
                        minHeight: 150,
                        bgcolor: "white",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        }}
                    >
                        <CardHeader
                        title="Type"
                            subheader={type}
                        sx={{
                            "& .MuiCardHeader-title": {
                            fontSize: "21px",
                            fontWeight: "bold",
                            paddingRight: "1px",
                            },
                            "& .MuiCardHeader-subheader": {
                            fontSize: "20px",
                            fontWeight: "bold",
                            paddingTop:"30px",
                            color: "black",
                            },
                        }}
                        />
                    </Card>
                </Grid> 

                <Grid xs={12} sm={4} md={4}>                
                    <Card variant="outlined" sx={{height:'100%',minHeight: 150, width:'100%',maxWidth: 900,borderRadius:'10px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                        <CardHeader
                        title="Description"
                         subheader={description}
                        sx={{
                            "& .MuiCardHeader-title": {
                            fontSize: "22px",
                            fontWeight: "bold",
                            paddingRight: "1px",
                            },
                            "& .MuiCardHeader-subheader": {
                            fontSize: "20px",
                            fontWeight: "bold",
                            paddingTop:"30px",
                            color: "black",
                            },
                            
                        }}
                        />
                    </Card>
                </Grid>               
            </Grid>
        
            <Grid
              container
            //   spacing={{ xs: 2, md: 2,sm: 2 }}
            //   columns={{ md: 12 }}
              //below styling is to align the grids inside the contianer center.
            //   sx={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   }}
            >
                <Grid xs={12} sm={4} md={4} mt={2} >                
                    {/* <Card variant="outlined" sx={{height:'100%',minHeight: 150, width:'100%',maxWidth: 900,borderRadius:'10px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                        <CardHeader
                        title="Image"
                        //  subheader={feedbackData.email} //emails
                        sx={{
                            "& .MuiCardHeader-title": {
                            fontSize: "22px",
                            fontWeight: "bold",
                            paddingRight: "1px",
                            },
                            "& .MuiCardHeader-subheader": {
                            fontSize: "20px",
                            fontWeight: "bold",
                            paddingTop:"30px",
                            color: "black",
                            },
                            
                        }}
                        />
                    </Card> */}
                        <img src={imageUrl} style={{width: '100%'}}/>
                </Grid>                        
            </Grid>
                              
    </Box>
    </Box>
    </Box>
  );
}
 
export default ViewReviews;