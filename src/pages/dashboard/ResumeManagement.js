import  React,{ useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon
import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


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
const ResumeManagement = () => {
    
  const [resumeRows, setResumeRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchResumeData();
  }, []);

  const firestore = getFirestore();

  const fetchResumeData = async () => {
    const resumeCollectionRef = collection(firestore, "studentdetails");
    const snapshot = await getDocs(resumeCollectionRef);
    const data = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        // email: doc.id,
        Name: data.Proname || "",
        Field: data.PJobRoles ? data.PJobRoles.join(", ") : "",
        CreatedDate: data.createdAt ? new Date(data.createdAt.seconds * 1000) : null,
      };
    });
    setResumeRows(data);
  };

  const resumeColumns = [
    { field: 'id', headerName: 'Email', width: 300 }, // Rename "ID" to "Name"
    { field: 'Name', headerName: 'Name', width: 300 }, 
    { field: 'Field', headerName: 'Field', width: 300 },
    { field: 'CreatedDate', headerName: 'Created Date', width: 300 },
    {
        field: 'View',
        headerName: 'View',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 150,
        renderCell: (params) => (
          <>
            <Button
            // variant="contained"
            // color="warning"
            variant="contained" 
            sx={{borderRadius:"25px",backgroundColor: '#242624',height:'28px'}}
            >
                View CV
            </Button>
          </>
        ),
      },
    {
      field: 'Action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleDeleteRow(params.row.id)}>
              <DeleteIcon />{/* Edit functionality to be implemented later */}
          </IconButton>
          
        </>
      ),
    },
  ];
  const handleDeleteRow = (id) => {
    setOpenDialog(true);
    setDeleteId(id);
};
const handleConfirmDelete = async () => {
  try {
      const docRef = doc(firestore, "studentdetails", deleteId);
      await deleteDoc(docRef);
      setSuccessMessage("Resume deleted sucessfullt!");
      setResumeRows(resumeRows.filter((row) => row.id !== deleteId));
  } catch (error) {
      console.error("Error deleting row: ", error);
  } finally {
      setOpenDialog(false);
       
  }
};

const handleCloseSnackbar = () => {
  setSuccessMessage("");
};
    return ( 
            <Box sx={{ display: 'flex'}}>
                <DashboardHeader />
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%",minHeight:"950px"}} >
                    <Toolbar />
                    
                    <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                      <div style={{textAlign:"left",maxWidth:730,width:"100%",paddingBottom:"10px"}}>
                      
                        <h2>All Resumes</h2>
                
                
                      </div>
                      <div style={{textAlign:"right",maxWidth:730,width:"100%",paddingBottom:"10px"}}>
                      
                            <Button
                            
                            variant="contained" 
                            sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                            >
                            Add Account
                            </Button>
                      
                      
                      </div>
                    </div>
                    <Box sx={{ flexGrow: 1,display: "flex",alignItems: "center",justifyContent: "center"}}>
                      
                    <Card style={{ height: 631,width:"100%",maxWidth:1460,borderRadius:'25px', }}>
                     
                            <DataGrid
                                
                                rows={resumeRows}
                                columns={resumeColumns}
                                initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                                }}
                                pageSizeOptions={[5,10,20]}
                            
                            />
                    </Card>
                    </Box>
                    <div style={{display: "flex",alignItems: "center",justifyContent: "center", paddingTop:"50px"}}>
                      <div style={{textAlign:"left",maxWidth:730,width:"100%",paddingBottom:"10px"}}>
                      
                        <h2>Cv Feedback</h2>
                        <p>Overall user experience of the CV generator platform</p>
                
                      </div>
                      <div style={{textAlign:"right",maxWidth:730,width:"100%",paddingBottom:"10px"}}>
                      
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
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this resume?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={successMessage !== ""} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
                    {successMessage}
                </MuiAlert>
            </Snackbar>
            </Box>
        );
}
 
export default ResumeManagement;