import React from 'react';
import "./Dashboard.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const UserProfileDiv = () => {
  return (
    <div  className="UserProfileDiv">
      <div   style={{ display: 'flex', alignItems: 'center' }}>
        <div  style={{ marginRight: '20px' }}>
          {/* Change the src attribute to the path of your avatar image */}
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" sx={{ width: 100, height: 100 }} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '50px', margin: 0 }}>John Doe</h1>
          <p style={{ fontFamily: 'Inter', fontSize: '20px', margin: '5% 0' }}>BSc.(Hons) in Software Engineering</p>
          <p style={{ fontFamily: 'Inter', fontSize: '16px', margin: '5% 0' }}>CV Status: <Button variant="contained" style={{ backgroundColor: '#00FF00', color: '#000', fontWeight: 'bold' }}>
            Created
          </Button></p>
          
        </div>
      </div>
    </div>
  );
}

const RecruitementStatus = () => {
    return (
      // Inside your React component
<div className="recruitment-status-container">
  <h2 style={{ fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px', margin: '10px 0',marginLeft:'2%' }}>Recruitment Status</h2>
  <FormControl style={{marginLeft:'2%'}}>
    <Select defaultValue="Select Status" style={{ minWidth: '150px' }}>
      <MenuItem value="" disabled>Select Status</MenuItem>
      <MenuItem value="inProgress">Recruited</MenuItem>
      <MenuItem value="completed">Recruitment Pending</MenuItem>
      <MenuItem value="pending">Not Recruited</MenuItem>
    </Select>
  </FormControl>
</div>

    );
  }

const Dashboard =() =>{
    return(

        <div>
            <UserProfileDiv/>
            <RecruitementStatus/>
        </div>

        

    );
}

export default Dashboard;

