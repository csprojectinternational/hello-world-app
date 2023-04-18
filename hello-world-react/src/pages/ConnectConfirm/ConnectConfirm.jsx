import React, { useEffect, useState } from 'react'
import Background from '../../components/Background/Background'
import NavBar from '../../components/NavBar/NavBar'
import { Typography } from '@mui/material'
import YellowButton from '../../components/YellowButton/YellowButton'
import { useLocation, useNavigate } from 'react-router-dom'
import Authenticate from '../Authenticate/Authenticate'
import TriggerOnRender from '../../components/TriggerOnRender/TriggerOnRender'

const ConnectConfirm = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [student, setStudent] = useState();

  function doStudent() {
    setStudent(location.state.student);
  }

  return (
    <>
      <Authenticate location={location}>
        <TriggerOnRender func={doStudent}>
          <Background />
          <NavBar showSignIn={false}/>
          {student && <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <Typography variant="h4">You have successfully signed up for lessons with {student.name}!</Typography>
            <Typography variant="h5">Grade: {student.grade}</Typography>
            <Typography variant="h5">Band: {student.band}</Typography>
            <Typography variant="h5">Instrument: {student.instrument}</Typography>
            <Typography variant="h5">Setting Preference: {student.settingPreference}</Typography>
            <Typography variant="h4">Reach out to them now:</Typography>
            {student.communicationPreference != "Phone" && <Typography variant="h5">Email: {student.email}</Typography>}
            {student.communicationPreference != "Email" && <Typography variant="h5">Phone: {student.phone}</Typography>}
            <Typography variant="h4">If you have any other questions, please contact <em style={{fontWeight: 'strong'}}>tiedtogether.connect@gmail.com</em>.</Typography>
            <YellowButton onClick={() => {
              // pass auth credentials back
              navigate('/dashboard', {state: {id: location.state.id, password: location.state.password}});
            }}>Find More Students</YellowButton>
          </div>}
        </TriggerOnRender>
      </Authenticate>
    </>
  )
}

export default ConnectConfirm

// phone number / email dep on commpref, setting