import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LoginIcon from '@mui/icons-material/Login';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Logout from '@mui/icons-material/Logout';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Logo from "../assets/logo/Persona Prep Light.png";

const redirectToLogin = () => {
  window.location.href = '/login';
};

const redirectToDashboard = () => {
  window.location.href = '/dashboard';
};

const InterviewFormHeader = ({ title }) => {
  const [user, setUser] = useState(auth.currentUser);
  const [profilePicture, setProfilePicture] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        const microsoftProfilePicture = user.providerData.find((provider) => provider.providerId === 'microsoft.com')?.photoURL;
        setProfilePicture(microsoftProfilePicture);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map((part) => part[0]).join('').toUpperCase();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="formtemp-header-container">
      <div className="logo">
        <a onClick={() => window.location.href = '/home'} style={{cursor: 'pointer'}}>
          <img src={Logo} alt="logo" style={{width:'120px'}}/>
        </a>
      </div>
      <div className="formtemp-variable">
        <p className="formtemp-variablename" style={{ display: 'inline-block', marginRight: '10px' }}>{title}</p>
        {user && (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              style={{ display: 'inline-block' }}
            >
              <Avatar sx={{ width: 45, height: 45 }} style={{marginBottom:'1.3rem', marginLeft:'2rem', marginRight:'2rem'}}>
                {profilePicture ? (
                  <img src={profilePicture} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                ) : (
                  getInitials(user.displayName || '')
                )}
              </Avatar>
            </IconButton>
          </Tooltip>
        )}
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {user && (
          <>
            <MenuItem onClick={redirectToDashboard}>
              <ListItemIcon>
                <DashboardCustomizeIcon fontSize="small" />
              </ListItemIcon>
              Dashboard
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        )}
        {!user && (
          <MenuItem onClick={redirectToLogin}>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}

export default InterviewFormHeader;
