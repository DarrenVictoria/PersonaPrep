// import React, { useRef, useState } from 'react';
// import { Grid, Paper, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useMediaQuery } from '@mui/material';

//   import logo from '../../assets/logo/Persona Prep Light.png';
  
//   const drawerWidth = 240; // Adjust this value as needed for your drawer width
  
//   const TestTemplate = () => {
//     const cvs_instance = useRef();
//     const secondStepperRef = useRef();
//     const [currentPageIndex, setCurrentPageIndex] = useState(0);
//     const [mobileOpen, setMobileOpen] = useState(false);
  
//     // ... other code ...
  
//     const handleDrawerToggle = () => {
//       setMobileOpen(!mobileOpen);
//     };
  
//     return (
//       <div className="formtemp-page">
//         <div className="formtemp-header-container">
//           <div className="logo"><img src={logo} alt="logo" style={{ width: '120px' }} /></div>
//           <div className="formtemp-variable">
//             {(currentPageIndex == 0) && <p className="formtemp-variablename">Degree Information</p>}
//           </div>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </div>
//         <div className="formtemp-bodyform">
//           <Grid container spacing={2} style={{ height: '100%' }}>
//             <Grid item xs={2} md={2} style={{ padding: '25px' }}>
//               {/* ... stepper content ... */}
//             </Grid>
//             <Grid item xs={10} md={10} style={{ backgroundColor: '#D9D9D9', borderRadius: '0px 0px 50px 0px' }}>
//               <Drawer
//                 variant="temporary"
//                 open={mobileOpen}
//                 onClose={handleDrawerToggle}
//                 sx={{
//                   display: { xs: 'block', sm: 'none' },
//                   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                 }}
//               >
//                 {/* ... drawer content ... */}
//               </Drawer>
//               <form style={{ height: '100%', position: 'relative' }}>
//                 <div style={{ marginBottom: '125px', marginTop: '80px', marginRight: '25px', marginLeft: '25px' }}>
//                   {/* ... form content ... */}
//                 </div>
//               </form>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     );
//   };
  
//   export default TestTemplate;
  