import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
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
import Logo from "../assets/logo/Persona Prep Dark.png"
import {useNavigate,Link} from 'react-router-dom';



const redirectToLogin = () => {
  window.location.href = '/login';
};

const redirectToDashboard = () => {
  window.location.href = '/dashboard';
};



const NavBar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
  
    try {
      await signOut(auth);
      
      // User is signed out.
    } catch (error) {
      console.error(error);
    }
  };




  const [user, setUser] = useState(auth.currentUser);
  const [profilePicture, setProfilePicture] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // Fetch the user's profile picture URL from the Microsoft account
        // This assumes that the Microsoft provider is used during authentication
        const microsoftProfilePicture = user.providerData.find((provider) => provider.providerId === 'microsoft.com')?.photoURL;
        setProfilePicture(microsoftProfilePicture);
      }
    });

    return () => {
      // Cleanup the subscription when the component unmounts
      unsubscribe();
    };
  }, []);

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
    <div style={{ backgroundColor: 'lightgray', boxShadow: '0px 4px 7px 2px rgba(0, 0, 0, 0.25)', padding: '10px', flex: '1' }}>
      <React.Fragment>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'center', padding: '10px', flex: '1' }}>
        <Link to="/home" style={{marginRight: 'auto', padding: '0.3%'}}> {/* Wrap the Logo inside Link */}
            <img src={Logo} style={{ width: '90px'}} alt="Logo" />
          </Link>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 35, height: 35 }}>
                {profilePicture ? (
                  <img src={profilePicture} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                ) : (
                  getInitials(user?.displayName || '')
                )}
              </Avatar>
            </IconButton>
          </Tooltip>
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
          <MenuItem onClick={redirectToLogin}>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
          <Divider />
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
        </Menu>
      </React.Fragment>
    </div>
  );
};

export default NavBar;
