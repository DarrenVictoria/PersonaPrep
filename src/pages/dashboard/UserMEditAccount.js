import  React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DashboardHeader from "./dashboardHeader";

  
  
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