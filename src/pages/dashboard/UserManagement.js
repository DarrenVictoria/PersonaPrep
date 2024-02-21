import  React, { useState, useEffect } from "react";
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
import { getFirestore, collection, query, getDocs, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



// const columns = [
//     { field: 'id', headerName: 'Email', width: 300 }, // Rename "ID" to "Name"
//     { field: 'Name', headerName: 'Name', width: 300 }, 
//     { field: 'EmployeeID', headerName: 'Employee ID', width: 300 },
//     { field: 'Role', headerName: 'Role', width: 300 },
//     {
//       field: 'fullName',
//       headerName: 'Action',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 100,
//       renderCell: (params) => (
//         <>
//           <IconButton onClick={() => handleDeleteRow(params.row.id)}>
//               <DeleteIcon />{/* Edit functionality to be implemented later */}
//           </IconButton>
//           {/* <IconButton>
//           <EditIcon /> Edit functionality to be implemented later
//           </IconButton> */}
//         </>
//       ),
//     },
//   ];
  
  // const rows = [
  //   { id: "isuruushan2003@gmail.com", Name: 'Snow',EmployeeID: 'Snow', Role: 'Admin'},
  //   { id: "Darrenvictoria@gmail.com", Name: 'Snow',EmployeeID: 'Lannister', Role: 'Manager'},
  //   { id: "isuruushan2004@gmail.com", Name: 'Snow',EmployeeID: 'Lannister', Role: 'Admin'},
  //   { id: "isuruushan2005@gmail.com", Name: 'Snow',EmployeeID: 'Stark', Role: 'Admin'},
  //   { id: "Darrenvictoria1@gmail.com", Name: 'Snow',EmployeeID: 'Targaryen', Role: 'Admin'},
  //   { id: "Darrenvictoria2@gmail.com", Name: 'Snow',EmployeeID: 'Melisandre', Role: null},
  //   { id: "Darrenvictoria3@gmail.com", Name: 'Snow',EmployeeID: 'Clifford', Role: 'Manager'},
  //   { id: "Darrenvictoria4@gmail.com", Name: 'Snow',EmployeeID: 'Frances', Role: 'Manager'},
  //   { id: "Darrenvictoria5@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
  //   { id: "Darrenvictoria6@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
  //   { id: "Darrenvictoria7@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
  //   { id: "Darrenvictoria8@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
  //   { id: "Darrenvictoria9@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
   
  // ];
const AUserManageDash = () => {
    // const handleDeleteRow = async (id) => {
    //   const docRef = doc(collection(firestore, 'your-collection-name'), id); // Replace with your collection name
    //   await deleteDoc(docRef);
    //    Update the local rows array after successful deletion
    //   setRows(rows.filter((row) => row.id !== id));
    // };
    const [rows, setRows] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const db = getFirestore();
        const q = query(collection(db, 'adminaccounts')); // Query the 'admins' collection
        const querySnapshot = await getDocs(q);
        const fetchedRows = [];
    
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.allowedEmails && Array.isArray(data.allowedEmails)) {
                data.allowedEmails.forEach((email) => {
                    fetchedRows.push({
                        id: email,
                        ...data
                    });
                });
            }
        });
    
        setRows(fetchedRows);
    };

        fetchData();
    }, []);
    const handleDeleteRow = (id) => {
      setOpenDialog(true);
      setDeleteId(id);
  };
  const handleConfirmDelete = async () => {
    try {
        const db = getFirestore();
        const docRef = doc(db, 'adminaccounts', 'admins'); // Assuming 'admins' is the document ID
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.allowedEmails && Array.isArray(data.allowedEmails)) {
                const updatedEmails = data.allowedEmails.filter(email => email !== deleteId);
                await updateDoc(docRef, { allowedEmails: updatedEmails });
                setRows(rows.filter(row => row.id !== deleteId));
                setDeleteMessage("Email successfully deleted from allowedEmails array!");
            }
        }
    } catch (error) {
        console.error("Error deleting email from allowedEmails array: ", error);
    } finally {
        setOpenDialog(false);
        
    }
};

const handleCloseSnackbar = () => {
    setDeleteMessage("");
};
  const columns = [
    { field: 'id', headerName: 'Email', width: 1200 },
    // { field: 'Name', headerName: 'Name', width: 300 }, 
    // { field: 'EmployeeID', headerName: 'Employee ID', width: 300 },
    // { field: 'Role', headerName: 'Role', width: 300 },
    {
        field: 'fullName',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
        renderCell: (params) => (
            <>
                <IconButton onClick={() => handleDeleteRow(params.row.id)}>
                    <DeleteIcon />
                </IconButton>
                {/* <IconButton>
                    <EditIcon />
                </IconButton> */}
            </>
        ),
    },
];
    return ( 
            <Box sx={{ display: 'flex'}}>
                <DashboardHeader />
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%",minHeight:"950px"}} >
                    <Toolbar />
                    
                    <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                      <div style={{textAlign:"left",maxWidth:660,width:"100%",paddingBottom:"10px"}}>
                      
                        <h2>Application Roles</h2>
                
                
                      </div>
                      <div style={{textAlign:"right",maxWidth:660,width:"100%",paddingBottom:"10px"}}>
                      
                            <Button
                            // variant="contained"
                            // color="warning"
                            variant="contained" 
                            sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                            onClick={() => window.location.href = '/AdduserDash'}
                            >
                            Add Account
                            </Button>
                      
                      
                      </div>
                    </div>
                    <Box sx={{ flexGrow: 1,display: "flex",alignItems: "center",justifyContent: "center"}}>
                      
                    <Card style={{ height: 631,width:"100%",maxWidth:1320,borderRadius:'25px', }}>
                     
                            <DataGrid
                                
                                rows={rows}
                                columns={columns}
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
                        Are you sure you want to delete this email?
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
            <Snackbar open={deleteMessage !== ""} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
                    {deleteMessage}
                </MuiAlert>
            </Snackbar>
            </Box>
        );
}
 
export default AUserManageDash;