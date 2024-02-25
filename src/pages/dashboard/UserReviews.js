import  React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";
import { collection, addDoc, getFirestore, query, getDocs, orderBy } from 'firebase/firestore';


const feedbackColumns = [
    {field: 'num', headerName: '', width: 50},
    { field: 'id', headerName: 'ID', width: 220 }, 
    // { field: 'date', headerName: 'Date', width: 100 },
    {
        field: 'action',
        headerName: '',
        sortable: false,
        width: 150,
        renderCell: (params) => (
          <>
            <Button
            // variant="contained"
            // color="warning"
            variant="contained" 
            sx={{borderRadius:"25px",backgroundColor: '#242624',height:'28px'}}
            onClick={() => {window.location.href = `/viewReviews?id=${params.row.id}`}}
            >
                View
            </Button>
          </>
        ),
      },
];


const UserReviews = () => {
    const [feedbackRows, setFeedbackRows] = useState('');
    const [feedbackCount, setFeedbackCount] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const db = getFirestore();
                const feedbackCol = collection(db, 'feedback');
                const querySnapshot = await getDocs(query(feedbackCol)); //, orderBy('addedAt')
                const docRef = querySnapshot.docs.map((doc, index) => {
                    const feedbackData = doc.data();
                    return {
                        num: (index+1),
                        id: doc.id, 
                        email: feedbackData.email,
                    }
                });
                setFeedbackRows(docRef);
                setFeedbackCount(querySnapshot.size);

            }catch (err) {
                console.log('error fetching data', err.message)
            }
        };

        fetchUserData();
    }, []);

    return ( 
        <Box sx={{ display: 'flex'}}>
            <DashboardHeader />
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1', width:"100%", minHeight:"950px"}} >
                <Toolbar />
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{textAlign:"left", maxWidth:730, width:"100%", paddingBottom:"10px"}}>                    
                        <h2>Reviews</h2>
                        <p>Overall user experience of the PersonaPrep platform</p>            
                    </div>

                    <div style={{textAlign:"right", maxWidth:730, width:"100%", paddingBottom:"10px", paddingLeft: '50px'}}>                    
                        <Card
                            sx={{
                            // maxWidth: 300,
                            width:"100%",
                            maxWidth: 250,
                            maxHeight: 100,
                            // bgcolor: "white",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: 'white',
                            // color: 'black',
                            marginLeft: "auto"
                            }}
                        >
                            <CardHeader
                            subheader={feedbackCount}
                            sx={{
                                "& .MuiCardHeader-title": {
                                fontSize: "13px",
                                fontWeight: "bold",
                                paddingRight: "1px",
                                },
                                "& .MuiCardHeader-subheader": {
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",                                        
                                },
                            }}
                            />
                            <CardHeader
                            subheader="Reviews"
                            sx={{
                                "& .MuiCardHeader-title": {
                                fontSize: "13px",
                                fontWeight: "bold",
                                paddingRight: "1px",
                                },
                                "& .MuiCardHeader-subheader": {
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",                                        
                                },
                            }}
                            />
                        </Card>                                    
                    </div>
                </div>

                <Box sx={{ flexGrow: 1,display: "flex",alignItems: "center",justifyContent: "center"}}>                      
                    <Card style={{ height: 631,width:"100%",maxWidth:1460,borderRadius:'25px', }}>                     
                        <DataGrid                                
                            rows={feedbackRows}
                            columns={feedbackColumns}
                            initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                            }}
                            pageSizeOptions={[5,10,20]}                            
                        />
                    </Card>
                </Box>
            </Box>
        </Box>
     );
}
 
export default UserReviews;