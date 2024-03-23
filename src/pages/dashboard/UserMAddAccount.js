import React,{ useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHeader from "./dashboardHeader";
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { collection, doc, updateDoc, getFirestore, getDoc } from "firebase/firestore";



  
const AAddUserManageDash = () => {
   
const { register, handleSubmit, formState: { errors }, reset } = useForm();
const [saving, setSaving] = useState(false);
const [error, setError] = useState(null);

const onSubmit = async (data) => {
    // Clear previous errors
    setError(null);

    // Check if email field is empty
    if (!data.aemail) {
        setError("Email field is required");
        return;
    }

    // Check if email is valid
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(data.aemail)) {
        setError("Please enter a valid email address");
        return;
    }

    try {
        setSaving(true);
        const firestore = getFirestore();
        const adminRef = doc(firestore, "adminaccounts", "admins");

        // Fetch current list of allowed emails
        const adminSnapshot = await getDoc(adminRef);
        const allowedEmails = adminSnapshot.data().allowedEmails;

        // Check if email already exists
        if (allowedEmails.includes(data.aemail)) {
            setError("Email already exists in allowed emails list");
            setSaving(false);
            return;
        }

        // Add the new email to the list
        const updatedAllowedEmails = [...allowedEmails, data.aemail];
        await updateDoc(adminRef, { allowedEmails: updatedAllowedEmails });

        reset(); // Clear the form after successful submission
        setSaving(false);
        setError(null); // Clear any previous errors
    } catch (error) {
        setSaving(false);
        setError("Failed to save changes. Please try again later.");
        console.error("Error updating document: ", error);
    }
};
    


    return ( 
            <Box sx={{ display: 'flex'}}>
                <DashboardHeader />
                <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#d1d1d1',width:"100%"}}>
                    <Toolbar />
                    
                
                    <Box sx={{ flexGrow: 1,display: "flex",justifyContent: "center",minHeight:"950px"}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <Grid container spacing={2} >
                        
                                <Grid item xs={12} textAlign={"left"} sx={{paddingBottom:"20px"}}>
                                    <Button
                                    variant="contained" 
                                    sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                                    onClick={() => window.location.href = '/userDash'}
                                    >
                                        Back
                                    </Button>
                                </Grid>

                                <Grid item xs={12} textAlign={"left"}>
                                    <h2>Add account</h2>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    
                                    <Typography ><span style={{color: 'red'}}>*</span> Email</Typography>
                                
                                    <TextField type="email" variant="outlined" 
                                
                                    {...register("aemail", { required: true })}
                                    fullWidth InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                    />
                                    {errors.aemail && "This field is required"}
                                </Grid>
                                <Grid item md={12}  sx={12}>
                                    {error && <div>{error}</div>}
                                </Grid>
                                
                                <Grid item sx={3}  >
                                    <Button
                                    variant="contained" 
                                    sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                                    onClick={() => reset()}
                                    disabled={saving}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                                
                                <Grid item sx={3} >
                                    <Button
                                    variant="contained" 
                                    sx={{borderRadius:"25px",backgroundColor: '#242624'}}
                                    type='submit'
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