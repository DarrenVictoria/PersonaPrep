import { useNavigate } from "react-router-dom";
import  React,{ useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { collection, getDocs, deleteDoc, doc,getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const ResumeManagement = () => {
    
  const [resumeRows, setResumeRows] = useState([]);
  const [feedbackRows, setFeedbackRows] = useState([]);
  const [cvfeedbackCount, setcvfeedbackCount] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Initialize useHistory hook
  useEffect(() => {
    fetchResumeData();
    fetchFeedbackData();
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
              variant="contained"
              sx={{borderRadius:"25px",backgroundColor: '#242624',height:'28px'}}
              onClick={() => handleViewCV(params.row)}
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
              <DeleteIcon />
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
      setSuccessMessage("Resume deleted sucessfully !");
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

const handleViewCV = async (row) => {
  try {
    const resumeDocRef = doc(firestore, "studentdetails", row.id);
    const docSnap = await getDoc(resumeDocRef);
    const data = docSnap.data();

    // Extract necessary data
    const email = data.email; // Assuming email is stored in the "email" field
    const templateName = encodeURIComponent(data.templateSelection.template); // Assuming template name is stored in the "templateSelection" field

    // Construct URL
    const url = `http://personaprep.web.app/${templateName}?username=${email}`;
    console.log("templateName",templateName);
    console.log("email",email);

    // Redirect user to the constructed URL
    window.location.href = url;
  } catch (error) {
    console.error("Error fetching document:", error);
  }
};
const fetchFeedbackData = async () => {
  const feedbackCollectionRef = collection(firestore, "cvfeedback");
  const snapshot = await getDocs(feedbackCollectionRef);
  setcvfeedbackCount(snapshot.size);
  console.log(feedbackCollectionRef);
  const data = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
          id: doc.id,
          email: data.email || "",
          feedback:data.feedback || "",
          accuracy: data.accuracy || 0,
          customization: data.customization || 0,
          experience: data.experience || 0,
          quality: data.quality || 0,
          date: data.addedAt ? new Date(data.addedAt .seconds * 1000) : null,
      };
  });

  // Calculate average feedback
  data.forEach(row => {
      row.averageFeedback = (row.accuracy + row.customization + row.experience + row.quality) / 4;
  });

  setFeedbackRows(data);
};


const feedbackColumns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'averageFeedback', headerName: 'Average Feedback', width: 300 },
  { field: 'date', headerName: 'Date', width: 300 },
  {
      field: 'View',
      headerName: 'View',
      sortable: false,
      width: 255,
      renderCell: (params) => (
          <>
              <Button
                  variant="contained"
                  sx={{ borderRadius: "25px", backgroundColor: '#242624', height: '28px' }}
                  onClick={() => handleViewFeedback(params)}
              >
                  View
              </Button>
          </>
      ),
  },
];
const handleViewFeedback = (params) => {
  // Check if params and params.row exist and have the id property
  if (params && params.row && params.row.id) {
    // Logic to view feedback details for the given ID
    console.log("View feedback for ID:", params.row.id);
    // Find the feedback data corresponding to the ID
    const feedbackData = params.row;
    // Navigate to ViewFeedback page and pass the feedbackData as state
    navigate("/viewfeedback", { state: { feedbackData } });
    console.log("feedback ", feedbackData);
  } else {
    console.error("Invalid params or params.row:", params);
  }
};

// const handleViewFeedback = (id) => {
//   // Logic to view feedback details for the given ID
//   console.log("View feedback for ID:", id);
//   // Find the feedback data corresponding to the ID
//   const feedbackData = id;
//   // Navigate to ViewFeedback page and pass the feedbackData as state
//   navigate("/viewfeedback", {feedbackData: feedbackData });
//   console.log("View feedback ", feedbackData);
// };


    return ( 
            <Box sx={{ display: 'flex'}}>
                <DashboardHeader />
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%",minHeight:"950px"}} >
                    <Toolbar />
                    
                    <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                      {/* <div style={{textAlign:"left",maxWidth:730,width:"100%",paddingBottom:"10px"}}> */}
                      <div style={{textAlign:"left",maxWidth:1460,width:"100%",paddingBottom:"10px"}}>
                        <h2>All Resumes</h2>
                
                
                      </div>
                      {/* <div style={{textAlign:"right",maxWidth:730,width:"100%",paddingBottom:"10px"}}>
                      
                            <Button
                            
                            variant="contained" 
                            sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                            >
                            Add Account
                            </Button>
                      
                      
                      </div> */}
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
                      <div style={{textAlign:"center",maxWidth:730,width:"100%",paddingBottom:"10px"}}>
                      
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
                            bgcolor: "white",
                            color: 'black',
                            marginLeft: "auto"
                            }}
                        >
                            <CardHeader
                            // avatar={
                            //     <Avatar sx={{ bgcolor: blue[800] }} aria-label="review">
                            //     {/* You can add an icon here if you want */}
                            //     </Avatar>
                            // }
                            title="Feedbacks"
                            subheader={cvfeedbackCount}
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
                            {/* <CardHeader
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
                                color: "black",                                        
                                },
                            }}
                            /> */}
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