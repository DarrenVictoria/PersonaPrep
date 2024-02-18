import  React from "react";
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
const columns = [
    { field: 'id', headerName: 'Email', width: 300 }, // Rename "ID" to "Name"
    { field: 'Name', headerName: 'Name', width: 300 }, 
    { field: 'EmployeeID', headerName: 'Employee ID', width: 300 },
    { field: 'Role', headerName: 'Role', width: 300 },
    {
      field: 'fullName',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton>
              <DeleteIcon />{/* Edit functionality to be implemented later */}
          </IconButton>
          <IconButton>
          <EditIcon /> {/* Edit functionality to be implemented later */}
          </IconButton>
        </>
      ),
    },
  ];
  
  const rows = [
    { id: "isuruushan2003@gmail.com", Name: 'Snow',EmployeeID: 'Snow', Role: 'Admin'},
    { id: "Darrenvictoria@gmail.com", Name: 'Snow',EmployeeID: 'Lannister', Role: 'Manager'},
    { id: "isuruushan2004@gmail.com", Name: 'Snow',EmployeeID: 'Lannister', Role: 'Admin'},
    { id: "isuruushan2005@gmail.com", Name: 'Snow',EmployeeID: 'Stark', Role: 'Admin'},
    { id: "Darrenvictoria1@gmail.com", Name: 'Snow',EmployeeID: 'Targaryen', Role: 'Admin'},
    { id: "Darrenvictoria2@gmail.com", Name: 'Snow',EmployeeID: 'Melisandre', Role: null},
    { id: "Darrenvictoria3@gmail.com", Name: 'Snow',EmployeeID: 'Clifford', Role: 'Manager'},
    { id: "Darrenvictoria4@gmail.com", Name: 'Snow',EmployeeID: 'Frances', Role: 'Manager'},
    { id: "Darrenvictoria5@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
    { id: "Darrenvictoria6@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
    { id: "Darrenvictoria7@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
    { id: "Darrenvictoria8@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
    { id: "Darrenvictoria9@gmail.com", Name: 'Snow',EmployeeID: 'Roxie', Role: 'Manager'},
   
  ];
const AUserManageDash = () => {
    // const handleDeleteRow = async (id) => {
    //   const docRef = doc(collection(firestore, 'your-collection-name'), id); // Replace with your collection name
    //   await deleteDoc(docRef);
    //    Update the local rows array after successful deletion
    //   setRows(rows.filter((row) => row.id !== id));
    // };
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
            </Box>
        );
}
 
export default AUserManageDash;