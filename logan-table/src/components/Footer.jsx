import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="body2" >
            &copy; {new Date().getFullYear()} Linear Algebra Thing
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}