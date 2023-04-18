import React, { useEffect, useState } from 'react'
import ErrorPage from '../ErrorPage/ErrorPage'
import Background from '../../components/Background/Background'
import NavBar from '../../components/NavBar/NavBar'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import api from '../../api/axiosConfig'

const Authenticate = ({ children, location }) => {

  const [initialized, setInitialized] = useState(false);
  // const [userId, setUserId] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (location.state) { // genuine log in
      async function getData() {
        try {
          const res = await api.get('/api/v1/tutors/all');
          const tutors = res.data;
          tutors.forEach((tutor) => {
            if (tutor.kisdID == location.state.id && tutor.password == location.state.password) {
              setLoggedIn(true);
              // setUserId(tutor.kisdID);
              // setUserPassword(tutor.password);
            }
          });
        } catch (e) {
          console.log(e);
        } finally {
          setInitialized(true);
        }
      }
      getData();
    }
  }, []);

  return (
    <>
      {initialized ? // if logged in was checked

        <>
          {loggedIn ? // if logged in correctly
            
            <>
              {children}
            </>
            
      
          : // not logged in correctly
        
            <ErrorPage />
      
          }
        </>

      : // authentication loading

      <Background>
        <NavBar />
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <Typography variant="h4">Loading...</Typography>
          <Typography variant="subtitle2">If this page loads for too long, there may be a server error; please check back later!</Typography>
        </div>
      </Background>
      
      }
    </>
  )
}

export default Authenticate