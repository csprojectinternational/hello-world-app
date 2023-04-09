import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const OnboardingButton = ( { link, text } ) => {
  return (
    <>
      <Link to={"/" + link} style={{textDecoration: "none"}}>
        <Button variant="contained" sx={{height: "3rem", width: "100%", backgroundColor: "#FFDC22", ":hover": {backgroundColor: "lightyellow"}}}>
          <Typography variant="h6" sx={{}}>{text}</Typography>
        </Button>
      </Link>
    </>
  )
}

export default OnboardingButton