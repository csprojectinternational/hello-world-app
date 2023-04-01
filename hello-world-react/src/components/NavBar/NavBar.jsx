import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const NavBar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" className="title" sx={{ fontWeight: 700, color: 'darkred' }}>
          Tied Together
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar