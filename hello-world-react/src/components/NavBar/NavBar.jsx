import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import './logo.png'
import YellowButton from '../YellowButton/YellowButton'

const NavBar = ({ showSignIn=true }) => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#91C0CE', boxShadow: "0px 0px", borderBottom: "3px solid #FFDC22" }}>
      <Toolbar>
        <Link to="/hello-world-app/">
          <img src="./logo.png" alt="logo" className="logo" style={{ height: '5vmin', paddingRight: '2vmin' }}></img>
        </Link>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'black', fontStyle: "none", fontSize: "5vmin" }}>
          TIE-D TOGETHER
        </Typography>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'right', position: 'absolute', right: '1rem'}}>
          {showSignIn && <Link to="/hello-world-app/login" sx={{height: 0}}>
            <YellowButton style={{ height: '4vw', fontSize: 'min(1rem, 4vw)', padding: '12px 8px' }}>Tutor Log In</YellowButton>
          </Link>}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar