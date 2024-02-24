import {useLocation}  from "react-router-dom";
import  React,{ useEffect, useState } from "react";
// import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Button from '@mui/material/Button';

  
const ViewFeedback = () => {
    const location = useLocation();
  const feedbackData = location.state?.feedbackData; // Corrected variable name
  
  useEffect(() => {
    console.log("feedbackDatavi:", feedbackData);
  }, [feedbackData]);
    // const [feedbackData, setfeedbackData] = useState(null);
    // useEffect(() => {
    //     // Fetch feedback details from Firestore based on feedbackData
    //     const fetchfeedbackData = async () => {
    //         if (feedbackData) {
    //             const db = getFirestore();
    //             const docRef = doc(db, "cvfeedback", feedbackData.id); // Assuming feedbackData contains the document ID
    //             const docSnap = await getDoc(docRef);
    //             if (docSnap.exists()) {
    //                 setfeedbackData(docSnap.data());
    //             } else {
    //                 console.log("No such document!");
    //             }
    //         }
    //     };

    //     fetchfeedbackData();
    // }, [feedbackData]);
  
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
              //below styling is to align the grids inside the contianer center.
              sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              }}
            >
                <Grid item xs={12} textAlign={"left"} sx={{paddingBottom:"20px"}}>
                        <Button
                        variant="contained" 
                        sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                        onClick={() => window.location.href = '/resumeManage'}
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
                    // justifyContent: "center",
                    }}
                >
                    <CardHeader
                    // avatar={
                    //     <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                        
                    //     </Avatar>
                    // }
                    title="Accuracy"
                     subheader={feedbackData.accuracy}//accuracy
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
                    // justifyContent: "center",
                        }}
                    >
                        <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                        //     {/* You can add an icon here if you want */}
                        //     </Avatar>
                        // }
                        title="Customization"
                         subheader={feedbackData.customization}
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
                    // justifyContent: "center",
                        }}
                    >
                        <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                        //     {/* You can add an icon here if you want */}
                        //     </Avatar>
                        // }
                        title="Experience"
                         subheader={feedbackData.experience}//experience
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
                        // justifyContent: "center",
                        }}
                    >
                        <CardHeader
                        // avatar={
                        //     <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                        //     {/* You can add an icon here if you want */}
                        //     </Avatar>
                        // }
                        title="Quality"
                         subheader={feedbackData.quality}//quality
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
                
          </Grid>
        
            <Grid
              container
              spacing={{ xs: 2, md: 2,sm: 2 }}
              columns={{ md: 12 }}
              //below styling is to align the grids inside the contianer center.
            //   sx={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   }}
            >
            <Grid xs={12} sm={6} md={6} mt={2} >
                
            <Card variant="outlined" sx={{height:'100%',minHeight: 150, width:'100%',maxWidth: 900,borderRadius:'10px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                    <CardHeader
                    title="Email"
                     subheader={feedbackData.email} //emails
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
            <Grid xs={12} sm={6} md={6} mt={2}>
                
                <Card variant="outlined" sx={{height:'100%',minHeight: 150, width:'100%',maxWidth: 900,borderRadius:'10px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                        <CardHeader
                        title="Feedback"
                         subheader={feedbackData.feedback} //feedback
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
            {/* <Grid
              container
              spacing={{ xs: 2, md: 2,sm: 2 }}
              columns={{ md: 12 }}
              //below styling is to align the grids inside the contianer center.
            //   sx={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   }}
            > */}
            {/* <Grid xs={12} sm={6} md={6} mt={2}>
                
            <Card variant="outlined" sx={{height:'100%',maxHeight: '400px', width:'100%',maxWidth: 900,borderRadius:'10px', border: 'none', overflowY:'auto',overflowX:'auto','@media (max-width:769px)':{borderColor:'white'},'@media (min-width:769px)':{overflowY:'hidden'}}}>
                    <CardHeader
                    title="Feedback"
                    subheader="isuruushan2003@gmail.comdcdfvdsvdfsvfdvzvfsvs dcd cd cd cd c dc dc d vd v dsvvfvsvsfv vsdsvswsdvs vfsvdvewsvwdsvs vsvsvsavsv svsdve" //reviews count 
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
            </Grid>  */}
          
                    
        </Box>
    </Box>
  </Box>
  );
}
 
export default ViewFeedback;