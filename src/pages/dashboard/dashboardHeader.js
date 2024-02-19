import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import logo from '../../assets/logo/Persona Prep Light.png';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

const settings = ['Option1', 'Option2'];

const DashboardHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return ( 
    
    <>
    
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container  maxWidth="100%" style={{backgroundColor: '#292727'}}>
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <a onClick={() => window.location.href = '/home'} style={{cursor: 'pointer'}}><img src={logo} alt="logo" style={{width:'80px'}}/></a>
          </IconButton>
          
          {/* hamburger menu box*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => window.location.href = '/admindash'}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={() => window.location.href = '/userDash'}>
                <Typography textAlign="center">User Management</Typography>
              </MenuItem>
              <MenuItem onClick={() => window.location.href = '/resumeManage'}>
                <Typography textAlign="center">Resume Management</Typography>
              </MenuItem>
              <MenuItem onClick={() => window.location.href = '/reviews'}>
                <Typography textAlign="center">Reviews</Typography>
              </MenuItem>
              <MenuItem onClick={() => window.location.href = '/admindash'}>
                <Typography textAlign="center">API Usage</Typography>
              </MenuItem>
              <MenuItem onClick={() => window.location.href = '/interviewDash'}>
                <Typography textAlign="center">Interview Bank Edit</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            <Typography variant='h4' fontWeight='bold' ml={6}>Dashboard</Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
      
    {/* sidebar */}
    <Drawer
      variant="permanent"
      sx={{
        display: {xs: 'none', md: 'flex'},
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',border:'none' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem disablePadding sx={{mb: 1}}>
              <ListItemButton onClick={() => window.location.href = '/admindash'}>
                  <ListItemIcon> <HomeIcon /> </ListItemIcon>
                   {/* <ListItemText primary={'Home'} />  */}
                  <Typography variant='h6' fontWeight='bold'>Home</Typography>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mb: 1}}>
              <ListItemButton onClick={() => window.location.href = '/userDash'}>
                  <ListItemIcon> <HomeIcon /> </ListItemIcon>
                  <Typography variant='h6' fontWeight='bold'>User Management</Typography>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mb: 1}}>
              <ListItemButton onClick={() => window.location.href = '/resumeManage'}>
                  <ListItemIcon> <HomeIcon /> </ListItemIcon>
                  <Typography variant='h6' fontWeight='bold'>Resume Management</Typography>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mb: 1}}>
              <ListItemButton onClick={() => window.location.href = '/reviews'}>
                  <ListItemIcon> <HomeIcon /> </ListItemIcon>
                  <Typography variant='h6' fontWeight='bold'>Reviews</Typography>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mb: 1}}>
              <ListItemButton onClick={() => window.location.href = '/admindash'}>
                  <ListItemIcon> <HomeIcon /> </ListItemIcon>
                  <Typography variant='h6' fontWeight='bold'>API Usage</Typography>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{mb: 1}}>
              <ListItemButton onClick={() => window.location.href = '/interviewDash'}>
                  <ListItemIcon> <HomeIcon /> </ListItemIcon>
                  <Typography variant='h6' fontWeight='bold'>Interview Bank Edit</Typography>
              </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
    
    </>
   );
}
 
export default DashboardHeader;