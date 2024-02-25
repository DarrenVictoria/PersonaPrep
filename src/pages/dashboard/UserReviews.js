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

const columns = [
    { field: 'id', headerName: 'Email', width: 250 }, 
    { field: 'name', headerName: 'Name', width: 150 }, 
    { field: 'time', headerName: 'Time', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
    //   description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 125,
      renderCell: () => (
        <>
          <Button sx={{width: '300px', border: '1px solid gray', borderRadius: '50px', padding: '0 5px', color: 'black'}}>view</Button>
        </>
      ),
    },
];
  
const rows = [
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
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1' }} >
                <Toolbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Card style={{ width:"100%", borderRadius:'25px', padding: '20px' }}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={8} mb={3}>
                                <Grid container>
                                    <Grid item xs={12} mb={3}>
                                        <Typography variant="h5" fontWeight='bold'>On-Display Feedback</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2" fontWeight='bold'>Overrall user experience of the PersonaPrep platform</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4} mb={3}>
                                <Card
                                    sx={{
                                    // maxWidth: 300,
                                    width: 250,
                                    minHeight: 100,
                                    // bgcolor: "white",
                                    borderRadius: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: blue[800],
                                    color: 'white'
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
                            </Grid>
                        </Grid>

                        <DataGrid                                
                            rows={rows}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                            }}
                            pageSizeOptions={[5, 10]}
                            sx={{
                                borderRadius: '25px',
                                maxHeight: '400px'
                            }}
                        />

                    </Card>
                </Box>
            </Box>
        </Box>
     );
}
 
export default UserReviews;