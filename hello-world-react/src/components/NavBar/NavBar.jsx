import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import './logo.png'

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#91C0CE', boxShadow: "0px 0px", borderBottom: "3px solid #FFDC22" }}>
      <Toolbar>
        <Link to="/">
          <img src="./logo.png" alt="logo" className="logo" style={{ height: '2.5rem', paddingRight: '1rem' }}></img>
        </Link>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'black', fontStyle: "none" }}>
          TIE-D TOGETHER
        </Typography>
        <Avatar sx={{ position: 'absolute', right: '1rem' }}></Avatar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar