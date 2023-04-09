import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import YellowButton from '../YellowButton/YellowButton'

const OnboardingButton = ( { link, text } ) => {
  return (
    <>
      <Link to={"/" + link} style={{textDecoration: "none"}}>
        <YellowButton style={{width: "100%", height: "6rem"}}>
          <Typography variant="h6" sx={{}}>{text}</Typography>
        </YellowButton>
      </Link>
    </>
  )
}

export default OnboardingButton