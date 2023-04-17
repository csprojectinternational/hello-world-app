import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Background from '../../components/Background/Background';
import NavBar from '../../components/NavBar/NavBar';
import ErrorPage from '../ErrorPage/ErrorPage';
import api from '../../api/axiosConfig';
import { Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useEffectAfterMount from '../../hooks/useEffectAfterMount';

const Dashboard = () => {

  const [initialized, setInitialized] = useState(false);

  const location = useLocation();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
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
              setUserId(tutor.kisdID);
              setUserPassword(tutor.password);
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

  const [checks, setChecks] = useState({});
  const [rows, setRows] = useState([]);

  async function getRows() {
    try {
      // const res = await api.get(`/api/v1/tutors/tutorWaitingList/${userId}`);
      const res = await api.get('/api/v1/students/all');
      const students = res.data;

      let toAdd = {};

      students.forEach((student) => {

        // info that will go in the row
        const rowInfo = {
          id: student.kisdID,
          name: student.firstName + " " + student.lastName,
          instrument: student.instrument,
          grade: student.grade,
          band: student.band,
          email: student.email,
          phone: student.phoneNumber,
          communicationPreference: student.communicationPreference,
          settingPreference: student.settingPreference
        };
        
        // check if this row already exists
        if (!checks[student.kisdID]) {
          // prepare to add all at once
          // must add all at once or they fetch old usestates
          toAdd[student.kisdID] = rowInfo;
        }

      });

      // if it doesnt, add it to the row-existing-checker
      setChecks({...checks, ...toAdd});
      // and put it in the grid
      setRows([...rows, ...Object.values(toAdd)]);

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    console.log(checks, rows)
  }, [checks, rows])

  useEffectAfterMount(() => {
    getRows();
  }, [userId]); // once userId has been gotten so that it can be used in the api request

  const columns = [
    { field: 'name', headerName: 'Name', minWidth: 300 },
    { field: 'instrument', headerName: 'Instrument', minWidth: 300 },
    { field: 'grade', headerName: 'Grade' },
    { field: 'band', headerName: 'Band', minWidth: 150 },

    { field: 'email', headerName: 'Email', minWidth: 300 },
    { field: 'phone', headerName: 'Phone Number', minWidth: 150 },

    { field: 'communicationPreference', headerName: 'Communication Preference', minWidth: 300 },
    { field: 'settingPreference', headerName: 'Setting Preference', minWidth: 300 },
    
    // {
    //   field: "connect",
    //   headerName: "Connect?",
    //   sortable: false,
    //   flex: 2,
    //   renderCell: (params) => {
    //     return <Button onClick={(event) => {
    //       event.stopPropagation(); // dont select the row
    //       console.log(params.row.id)
    //       try {
    //         api.put(`/api/v1/students/connectStudent/${userId}/${params.row.id}`);
    //       } catch (e) {
    //         console.log(e.message);
    //       }
    //     }}>Connect</Button>;
    //   }
    // },
  ];

  return (
    <>
      {initialized ? // if logged in was checked

        <>
          {loggedIn ? // if logged in correctly
                
            <Background style={{}}>
              <NavBar showSignIn={false} />
              {/* <div>{userId} {userPassword}</div> */}
              <DataGrid
                rows={rows}
                columns={columns}
                sx={{margin: '10vmin', height: '70vh', border: '2px solid #FFDC22'}}
              />
            </Background>
      
          : // not logged in correctly
        
            <ErrorPage />
      
          }
        </>

      : // authentication loading

      <Background>
        <NavBar />
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <Typography variant="h4">Loading...</Typography>
        </div>
      </Background>
      
      }
    </>
  )
}

export default Dashboard