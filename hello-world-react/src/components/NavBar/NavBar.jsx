import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import './logo.png'

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'lightgrey', boxShadow: "0px 0px" }}>
      <Toolbar>
        <img src="logo.png" alt="logo" className="logo" style={{ height: '2.5rem', paddingRight: '1rem' }} />
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'darkred' }}>
          TIED TOGETHER
        </Typography>
        <Avatar sx={{ position: 'absolute', right: '1rem' }}></Avatar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar