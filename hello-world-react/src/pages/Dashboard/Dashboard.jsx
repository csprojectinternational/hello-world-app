import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Background from '../../components/Background/Background';
import NavBar from '../../components/NavBar/NavBar';
import ErrorPage from '../ErrorPage/ErrorPage';
import api from '../../api/axiosConfig';
import { Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Dashboard = () => {

  const [initialized, setInitialized] = useState(false);

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
      } finally {
        setInitialized(true);
      }
    }
    getData();
  }

  const [checks, setChecks] = useState({});
  const [rows, setRows] = useState([]);

  async function getRows() {
    try {
      const res = await api.get(`/api/v1/tutors/tutorWaitingList/${userId}`);
      const students = res.data;
      students.forEach((student) => {

        // info that will go in the row
        const rowInfo = {
          id: student.kisdID,
          name: student.firstName + " " + student.lastName,
          instrument: student.instrument,
          grade: student.grade,
          band: student.band,
          settingPreference: student.settingPreference
        };
        
        // check if this row already exists
        if (!checks[student.kisdID]) {
          // if it doesnt, add it to the row-existing-checker
          setChecks({...checks, [student.kisdID]: rowInfo});
          // and put it in the grid
          setRows([...rows, rowInfo]);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    getRows();
  });

  const columns = [
    { field: 'name', headerName: 'Name', flex: 3 },
    { field: 'instrument', headerName: 'Instrument', flex: 2 },
    { field: 'grade', headerName: 'Grade', flex: 1 },
    { field: 'band', headerName: 'Band', flex: 2 },
    { field: 'settingPreference', headerName: 'Setting Preference', flex: 3 },
    {
      field: "connect",
      headerName: "Connect?",
      sortable: false,
      flex: 2,
      renderCell: (params) => {
        return <Button onClick={(event) => {
          event.stopPropagation(); // dont select the row
          console.log(params.row.id)
        }}>Connect</Button>;
      }
    },
  ];

  return (
    <>
      {initialized ? // if logged in was checked

        <>
          {loggedIn ? // if logged in correctly
                
            <Background style={{}}>
              <NavBar />
              {/* <div>{userId} {userPassword}</div> */}
              <DataGrid
                rows={rows}
                columns={columns}
                sx={{margin: '10vmin', height: '70vh'}}
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