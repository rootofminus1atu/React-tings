import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6">
            Linear Algebra Thing
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
