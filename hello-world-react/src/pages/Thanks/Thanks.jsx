import React from 'react'
import Background from '../../components/Background/Background'
import NavBar from '../../components/NavBar/NavBar'
import { Typography } from '@mui/material'

const Thanks = () => {
  return (
    <>
      <Background />
      <NavBar />
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <Typography variant="h4">Thanks for signing up!</Typography>
        <Typography variant="h5">A tutor will reach out to you soon. If you have any questions, contact <em style={{fontWeight: 'strong'}}>tiedtogether.connect@gmail.com</em></Typography>
        <Typography variant="h5">You may leave this page now.</Typography>
      </div>
    </>
  )
}

export default Thanks