import { Stack, Typography } from '@mui/material'
import React from 'react'
import OnboardingButton from '../../components/OnboardingButton/OnboardingButton'
import Background from '../../components/Background/Background'
import NavBar from '../../components/NavBar/NavBar'

const Onboarding = () => {
  return (
    <Background>
      <NavBar />
      <Stack spacing={3} sx={{ margin: 'auto', padding: '20vmin' }}>
        {/* <Typography variant="h3" sx={{fontStyle: 'italic', fontFamily: 'serif'}}>music tutoring made easy...</Typography> */}
        <OnboardingButton link="register-tutor" text="I want to be a tutor" />
        <OnboardingButton link="register-student" text="I want to be a student" />
      </Stack>
    </Background>
  )
}

export default Onboarding

//style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}