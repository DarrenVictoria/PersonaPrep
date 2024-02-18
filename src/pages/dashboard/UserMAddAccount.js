import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';




  
const AAddUserManageDash = () => {
const [Role, setRole] = React.useState("");
console.log(Role);
const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();

const password = watch('password');
const pemail = watch('pemail');
const name = watch('name');
const city = watch('city');
    console.log(password);
    console.log(pemail);
    console.log(name);
    console.log(city);
    return ( 
            <Box sx={{ display: 'flex'}}>
                <DashboardHeader />
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%"}} >
                    <Toolbar />
                    
                
                    <Box sx={{ flexGrow: 1,display: "flex",justifyContent: "center",minHeight:"950px"}}>
                        <form>
                            <Grid container spacing={2} >
                        
                                <Grid item xs={12} textAlign={"left"} sx={{paddingBottom:"20px"}}>
                                    <Button
                                    variant="contained" 
                                    sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                                    >
                                        Back
                                    </Button>
                                </Grid>

                                <Grid item xs={12} textAlign={"left"}>
                                    <h2>Add account</h2>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    
                                    <Typography ><span style={{color: 'red'}}>*</span> Full Name</Typography>
                                
                                    <TextField type="text" variant="outlined" 
                                    
                                    value={name}
                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}}
                                    
                                    {...register("name", { required: true, maxLength: 30, pattern: /^[a-zA-Z\s]+$/})}
                                    />
                                    {errors.name && errors.name.type === "required" ? "This field is required" : errors.name && "Please enter only letters"}
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    
                                    <Typography ><span style={{color: 'red'}}>*</span> Email</Typography>
                                
                                    <TextField type="email" variant="outlined" 
                                    
                                    value={pemail}
                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                    
                                    {...register("pemail", { required: true })}
                                    />
                                    {errors.pemail && "This field is required"}
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    
                                    <Typography ><span style={{color: 'red'}}>*</span> Password</Typography>
                                
                                    <TextField type="password" variant="outlined" 
                                    
                                    value={password}
                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                    
                                     {...register("password", {required: true})} />
                                    
                                     {errors.password && errors.password.type === "required" ? "This field is required" : errors.password && "Please enter a valid password"}
                                </Grid>

                               

                                <Grid item xs={12}  md={6}>
                                    <Typography sx={{paddingLeft:1}}><span style={{color: 'red'}}>*</span> Role</Typography>
                                    <FormControl variant="outlined" fullWidth>
                                        <Select
                                            value={Role}
                                            onChange={(event) => setRole(event.target.value)}
                                            displayEmpty
                                            input={<OutlinedInput sx={{ borderRadius: '25px', backgroundColor: '#FFFDFD',}} />}
                                            IconComponent={(props) => <ArrowDropDownCircleOutlinedIcon {...props} style={{ color: 'black' }} />}
                                            
                                            
                                        >
                                            <MenuItem disabled value="">Role</MenuItem>
                                            <MenuItem value="Full-Time">Full-Time</MenuItem>
                                            <MenuItem value="Part-Time">Part-Time</MenuItem>
                                            
                                        </Select>
                                    </FormControl>
                                </Grid>
                                
                                <Grid item sx={3}  >
                                    <Button
                                    variant="contained" 
                                    sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                                
                                <Grid item sx={3} >
                                    <Button
                                    variant="contained" 
                                    sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                                    >
                                        Save Changes
                                    </Button>
                                </Grid>
                                
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Box>
        );
}
 
export default AAddUserManageDash;