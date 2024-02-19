import  React from "react";
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


const feedbackColumns = [
    { field: 'id', headerName: 'Email', width: 400 }, 
    { field: 'name', headerName: 'Name', width: 300 }, 
    { field: 'time', headerName: 'Time', width: 300 },
    {
      field: 'action',
      headerName: 'Action',
    //   description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 155,
      renderCell: () => (
        <>
            <Button
                // variant="contained"
                // color="warning"
                variant="contained" 
                sx={{borderRadius:"25px",backgroundColor: '#242624',height:'28px'}}
                >
                    Open review
            </Button>
        </>
      ),
    },
];
  
const feedbackRows = [
    { id: "isuruushan2003@gmail.com", name: 'Snow', time: '30s'},
    { id: "Darrenvictoria@gmail.com", name: 'Snow', time: '30s'},
    { id: "isuruushan2004@gmail.com", name: 'Snow', time: '30s'},
    { id: "isuruushan2005@gmail.com", name: 'Snow', time: '30s'},
    { id: "Darrenvictoria1@gmail.com", name: 'Snow', time: '30s'},
    { id: "Darrenvictoria2@gmail.com", name: 'Snow', time: '30s'},
    { id: "Darrenvictoria3@gmail.com", name: 'Snow', time: '30s'},
    { id: "Darrenvictoria4@gmail.com", name: 'Snow', time: '30s'},
    { id: "Darrenvictoria5@gmail.com", name: 'Snow', time: '30s'},
];

const UserReviews = () => {
    return ( 
        <Box sx={{ display: 'flex'}}>
            <DashboardHeader />
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1', width:"100%", minHeight:"950px"}} >
                <Toolbar />
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{textAlign:"left", maxWidth:730, width:"100%", paddingBottom:"10px"}}>                    
                        <h2>Cv Feedback</h2>
                        <p>Overall user experience of the CV generator platform</p>            
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
                            bgcolor: blue[800],
                            color: 'white',
                            marginLeft: "auto"
                            }}
                        >
                            <CardHeader
                            // avatar={
                            //     <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                            //     {/* You can add an icon here if you want */}
                            //     </Avatar>
                            // }
                            // title="Feedbacks"
                            subheader="123"
                            sx={{
                                "& .MuiCardHeader-title": {
                                fontSize: "13px",
                                fontWeight: "bold",
                                paddingRight: "1px",
                                },
                                "& .MuiCardHeader-subheader": {
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "white",                                        
                                },
                            }}
                            />
                            <CardHeader
                            subheader="Feedbacks"
                            sx={{
                                "& .MuiCardHeader-title": {
                                fontSize: "13px",
                                fontWeight: "bold",
                                paddingRight: "1px",
                                },
                                "& .MuiCardHeader-subheader": {
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "white",                                        
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