import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Background from '../../components/Background/Background'

const ErrorPage = () => {
  return (
    <>
      <Background />
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <Typography variant="h4">404: Sorry, an error occured!</Typography>
        <Link to="/">
          <button style={{backgroundColor: "white", padding: "15px", margin: "25px", fontFamily: "Montserrat"}}>Return to Home</button>
        </Link>
      </div>
    </>
    
  )
}

export default ErrorPage