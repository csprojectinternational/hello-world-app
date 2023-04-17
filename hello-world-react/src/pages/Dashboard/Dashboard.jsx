import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Background from '../../components/Background/Background';
import NavBar from '../../components/NavBar/NavBar';
import ErrorPage from '../ErrorPage/ErrorPage';
import api from '../../api/axiosConfig';

const Dashboard = () => {

  const location = useLocation();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  if (location.state) { // genuine log in
    async function getData() {
      try {
        const res = await api.get('/api/v1/tutors/all');
        const tutors = res.data;
        tutors.forEach((tutor) => {
          if (tutor.kisdID == location.state.id && tutor.password == location.state.password) {
            setLoggedIn(true);
            setUserId(tutor.kisdID);
            setUserPassword(tutor.password);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }

  return (
    <>
      {loggedIn ? 
              
        <Background>
          <NavBar />
          <div>{userId} {userPassword}</div>
        </Background>
  
      :
    
        <ErrorPage />
  
      }
    </>
    
  )
}

export default Dashboard