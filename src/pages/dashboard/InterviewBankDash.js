import  React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { collection, addDoc, getFirestore, query, getDocs, orderBy } from 'firebase/firestore';


const interviewCols = [
    { field: 'id', headerName: '', width: 50 }, 
    { field: 'cardid', headerName: 'CardId', width: 150 }, 
    { field: 'Name', headerName: 'Name', width: 350 }, 
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 155,
      renderCell: (params) => (
        <>
            <Button
                variant="contained" 
                sx={{borderRadius:"25px",backgroundColor: '#242624',height:'28px'}}
                onClick={() => window.location.href = `/interviewCard?id=${params.row.cardid}`}
                // onClick={() => console.log(params.row.cardid)}
            >
                View
            </Button>
        </>
      ),
    },
];

const InterviewBankDash = () => {
    const [faculty, setFaculty] = useState('');
    const [interviewRows, setInterviewRows] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const db = getFirestore();
                const interviewCollection = collection(db, 'interviewcards');
                const querySnapshot = await getDocs(query(interviewCollection, orderBy('createdAt', 'desc')));
                const docRef = querySnapshot.docs.map((doc, index) => {
                    const interviewData = doc.data();
                    return {
                        id: (index+1), 
                        cardid: doc.id, 
                        Name: interviewData.topic
                    }
                });
                setInterviewRows(docRef);

            }catch (err) {
                console.log('error fetching data', err.message)
            }
        };

        fetchUserData();
    }, []);

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
                            rows={interviewRows}
                            columns={interviewCols}
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