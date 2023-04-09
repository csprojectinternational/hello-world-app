import { Stack, Typography } from '@mui/material'
import React from 'react'
import OnboardingButton from '../../components/OnboardingButton/OnboardingButton'

const Onboarding = () => {

  return (
    <Stack spacing={3} sx={{ margin: '20vmin' }}>
      <Typography variant="h3" sx={{fontStyle: 'italic', fontFamily: 'serif'}}>music tutoring made easy...</Typography>
      <OnboardingButton link="register-tutor" text="I want to be a tutor" />
      <OnboardingButton link="register-student" text="I want to be a student" />
    </Stack>
  )
}

export default Onboarding