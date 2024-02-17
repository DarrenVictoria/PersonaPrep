import  React from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import { DataGrid } from '@mui/x-data-grid';
import Card from "@mui/material/Card";
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon
import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
const columns = [
    { field: 'id', headerName: 'Email', width: 300 }, // Rename "ID" to "Name"
    { field: 'Name', headerName: 'Name', width: 150 }, 
    { field: 'EmployeeID', headerName: 'Employee ID', width: 150 },
    { field: 'Role', headerName: 'Role', width: 100 },
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
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1' }} >
                    <Toolbar />
                    <Box sx={{ flexGrow: 1 }}>
                    <Card style={{ height: 370,width:"100%",maxWidth:800,borderRadius:'25px' }}>
                            {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                variant="contained"
                                color="warning"
                                style={{ marginRight: 10, marginTop: 10 }}
                                >
                                Add Account
                                </Button>
                            </div> */}
                            <DataGrid
                                
                                rows={rows}
                                columns={columns}
                                initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                                }}
                                pageSizeOptions={[5, 10]}
                            
                            />
                    </Card>
                    </Box>
                </Box>
            </Box>
        );
}
 
export default AUserManageDash;