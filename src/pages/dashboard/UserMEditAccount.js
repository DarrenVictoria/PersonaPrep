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

  
  
const AEditUserManageDash = () => {
    
    return ( 
            <Box sx={{ display: 'flex'}}>
                <DashboardHeader />
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%",minHeight:"900px"}} >
                    <Toolbar />
                    
                    <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                      <div style={{textAlign:"left",maxWidth:660,width:"100%",paddingBottom:"10px"}}>
                      
                        <h2>Edit account</h2>
                
                
                      </div>
                      <div style={{textAlign:"right",maxWidth:660,width:"100%",paddingBottom:"10px"}}>
                      
                            
                      
                      
                      </div>
                    </div>
                    <Box sx={{ flexGrow: 1,display: "flex",alignItems: "center",justifyContent: "center"}}>
                      
                   
                    </Box>
                </Box>
            </Box>
        );
}
 
export default AEditUserManageDash;