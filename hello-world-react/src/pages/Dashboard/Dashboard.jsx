import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Background from '../../components/Background/Background';
import NavBar from '../../components/NavBar/NavBar';
import ErrorPage from '../ErrorPage/ErrorPage';
import api from '../../api/axiosConfig';
import { Button, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useEffectAfterMount from '../../hooks/useEffectAfterMount';
import Authenticate from '../Authenticate/Authenticate';
import TriggerOnRender from '../../components/TriggerOnRender/TriggerOnRender';
import YellowButton from '../../components/YellowButton/YellowButton';

const Dashboard = () => {

  const location = useLocation();
  const navigate = useNavigate();

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
          // email: student.email,
          // phone: student.phoneNumber,
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

  const columns = [
    {
      field: "connect",
      headerName: "Connect?",
      sortable: false,
      minWidth: 150,
      renderCell: (params) => {
        return <YellowButton onClick={(event) => {
          event.stopPropagation(); // dont select the row
          console.log(params.row.id)
          try {
            api.put(`/api/v1/students/connectStudent/${location.state.id}/${params.row.id}`);
            // pass auth credentials on
            navigate('/connect-confirm', {state: {id: location.state.id, password: location.state.password, student: params.row}});
          } catch (e) {
            console.log(e.message);
          }
        }} style={{height: '2rem'}}>Connect</YellowButton>;
      }
    },

    { field: 'name', headerName: 'Name', minWidth: 250 },
    { field: 'instrument', headerName: 'Instrument', minWidth: 200 },
    { field: 'grade', headerName: 'Grade', minWidth: 50 },
    { field: 'band', headerName: 'Band', minWidth: 150 },

    // { field: 'email', headerName: 'Email', minWidth: 300 },
    // { field: 'phone', headerName: 'Phone Number', minWidth: 150 },

    { field: 'communicationPreference', headerName: 'Communication Preference', minWidth: 250 },
    { field: 'settingPreference', headerName: 'Setting Preference', minWidth: 250 },
    
    
  ];

  return (
    <>
      <Authenticate location={location}>
        <TriggerOnRender func={getRows}>
          {/* once userId has been gotten so that it can be used in the api request */}
          <Background style={{}}>
            <NavBar showSignIn={false} />
            <DataGrid
              rows={rows}
              columns={columns}
              sx={{margin: '10vmin', height: '70vh', border: '2px solid #FFDC22'}}
              components={{
                NoRowsOverlay: () => (
                  <Stack height="100%" alignItems="center" justifyContent="center">
                    No relevant students for you to tutor at this time, please check back later!
                  </Stack>
                ),
                NoResultsOverlay: () => (
                  <Stack height="100%" alignItems="center" justifyContent="center">
                    No students match this filter.
                  </Stack>
                )
              }}
            />
          </Background>
        </TriggerOnRender>
      </Authenticate>
    </>
  )
}

export default Dashboard