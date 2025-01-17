import  React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon
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




const AUserManageDash = () => {
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
        const docRef = doc(db, 'adminaccounts', 'admins'); // Reference to the 'admins' document
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.allowedEmails && Array.isArray(data.allowedEmails)) {
                const updatedEmails = data.allowedEmails.filter(email => email !== deleteId);
                await updateDoc(docRef, { allowedEmails: updatedEmails });
                setRows(rows.filter(row => row.id !== deleteId));
                setDeleteMessage("Email successfully deleted from allowed Emails array!");
            }
        }
    } catch (error) {
        console.error("Error deleting email from allowed Emails array: ", error);
    } finally {
        setOpenDialog(false);
        
    }
};

const handleCloseSnackbar = () => {
    setDeleteMessage("");
};
  const columns = [
    { field: 'id', headerName: 'Email', width: 1200 },
    
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