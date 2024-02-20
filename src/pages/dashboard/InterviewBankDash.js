import  React, { useState } from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";
import FileUpload from "../../components/FileUpload";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const feedbackColumns = [
    { field: 'id', headerName: '', width: 50 }, 
    { field: 'name', headerName: 'Name', width: 350 }, 
    // { field: 'time', headerName: 'Time', width: 300 },
    {
      field: 'action',
      headerName: 'Action',
    //   description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 155,
      renderCell: () => (
        <>
            <Button
                variant="contained" 
                sx={{borderRadius:"25px",backgroundColor: '#242624',height:'28px'}}
                onClick={() => window.location.href = '/interviewEdit'}
            >
                View
            </Button>
        </>
      ),
    },
];
  
const feedbackRows = [
    { id: '1', name: 'FULL STACK DEV POSITION [VIRTUSA]' },
    { id: '2', name: 'FULL STACK DEV POSITION [VIRTUSA]' },
    { id: '3', name: 'FULL STACK DEV POSITION [VIRTUSA]' },
    { id: '4', name: 'FULL STACK DEV POSITION [VIRTUSA]' },
    { id: '5', name: 'FULL STACK DEV POSITION [VIRTUSA]' },
];

const InterviewBankDash = () => {
    const [faculty, setFaculty] = useState('');

    return ( 
        <Box sx={{ display: 'flex'}}>
            <DashboardHeader />
            <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: '#d1d1d1', width:"100%", minHeight:"950px" }} >
                <Toolbar />
                <Grid container>
                    <Grid item xs={12} mb={6} mt={3}>
                        <FormControl variant="outlined" sx={{width: '200px'}}>
                            <Select
                                value={faculty}
                                onChange={(event) => setFaculty(event.target.value)}
                                displayEmpty
                                input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD' }} />}
                                IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                            >
                                <MenuItem value="" disabled>Faculty</MenuItem>
                                <MenuItem value="Faculty of Computing">Faculty of Computing</MenuItem>
                                <MenuItem value="Faculty of Business" disabled>Faculty of Business</MenuItem>
                                <MenuItem value="Faculty of Engineering" disabled>Faculty of Engineering</MenuItem>
                                <MenuItem value="Faculty of Science" disabled>Faculty of Science</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={9} mr={2} mb={6}><Typography variant="h4" fontWeight='bold'>Interview Bank</Typography></Grid>
                    <Grid container item xs={2} mb={6} justifyContent='flex-end' >
                        <IconButton onClick={() => window.location.href = '/interviewEdit'}  color="primary" style={{ backgroundColor: 'black', borderRadius: '50%', width:'22px', height:'22px' }} >
                            <AddIcon style={{ color: 'white' }} />
                        </IconButton>
                    </Grid>
                </Grid>

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
 
export default InterviewBankDash;