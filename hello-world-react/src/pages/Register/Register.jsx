import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Stack, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './Register.css'
import { Link } from 'react-router-dom';
import Background from '../../components/Background/Background';
import YellowButton from '../../components/YellowButton/YellowButton';
import api from '../../api/axiosConfig';
import useEffectAfterMount from '../../hooks/useEffectAfterMount';

// TODO:

// make confirm password work
// implement mandatory fields, collect fields from outset
// collect everything up into an array on submit

// students: receive thanks page
// tutors: pick a student page

// better onboarding page

const Register = ({ isStudent }) => {

  const instruments = [
    "Flute",
    "Clarinet",
    "Bass Clarinet",
    "Alto Saxophone",
    "Tenor Saxophone",
    "Bassoon",
    "Oboe",
    "Trumpet",
    "Trombone",
    "French Horn",
    "Baritone/Euphonium",
    "Tuba",
    "Percussion"
  ];

  const [students, setStudents] = useState();

  const getStudents = async () => {
    try {
      const res = await api.get('/api/v1/students/all');
      console.log(res.data);
      setStudents(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffectAfterMount(() => {
    getStudents();
  }, []);

  const [collectedData, setCollectedData] = useState({});

  const onDataCollected = (event) => {
    setCollectedData({...collectedData, [event.target.name]: event.target.value});
  }

  return (
    <Background style={{position: "relative"}}>
      <Link to="/" style={{textDecoration: "none", position: "absolute", left: "20px", top: "20px"}}>
        <YellowButton>BACK</YellowButton>
      </Link>
      <Stack spacing={3} className="stack" sx={{margin: 0, padding: '20vmin'}}>
        <Typography variant="h4" color="initial" sx={{fontWeight: "bold"}}>
          SIGN UP AS A {isStudent ? "STUDENT" : "TUTOR"}
        </Typography>
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          onChange={onDataCollected}
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          onChange={onDataCollected}
        />
        <TextField
          name="id"
          label="Katy ISD ID"
          variant="outlined"
          onChange={onDataCollected}
        />
        <TextField
          name="email"
          label="Email Address"
          variant="outlined"
          onChange={onDataCollected}
        />
        <TextField
          name="phone"
          label="Phone Number"
          variant="outlined"
          onChange={onDataCollected}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={onDataCollected}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          onChange={onDataCollected}
        />

        {isStudent ?

        <Stack spacing={3} className="stack">
          <TextField
            name="learningGrade"
            label="Grade"
            variant="outlined"
            defaultValue="6"
            select
            onChange={onDataCollected}
          >
            {
              ["6", "7", "8"].map((grade) => (
                <MenuItem key={grade} value={grade}>{grade}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            name="learningBand"
            label="What band are you in?"
            variant="outlined"
            defaultValue="Beginner"
            select
            onChange={onDataCollected}
          >
            {
              [
                "Beginner",
                "Lyric",
                "Concert",
                "Symphonic"
              ].map((band) => (
                <MenuItem key={band} value={band}>{band}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            name="learningInstrument"
            label="What instrument are you learning?"
            variant="outlined"
            defaultValue="Flute"
            select
            onChange={onDataCollected}
          >
            {
              instruments.map((instrument) => (
                <MenuItem key={instrument} value={instrument}>{instrument}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            name="studentSettingPreference"
            label="Would you like in-person or virtual lessons?"
            variant="outlined"
            defaultValue="No Preference"
            select
            onChange={onDataCollected}
          >
            {
              ["No Preference", "In-Person", "Virtual"].map((choice) => (
                <MenuItem key={choice} value={choice}>{choice}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            name="studentCommunicationPreference"
            label="Would you like to be contacted via phone or email?"
            variant="outlined"
            defaultValue="No Preference"
            select
            onChange={onDataCollected}
          >
            {
              ["No Preference", "Phone", "Email"].map((choice) => (
                <MenuItem key={choice} value={choice}>{choice}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            name="privateLessons"
            label="Are you currently registered in paid private lessons?"
            variant="outlined"
            defaultValue="No"
            select
            onChange={onDataCollected}
          >
            {
              ["No", "Yes"].map((choice) => (
                <MenuItem key={choice} value={choice}>{choice}</MenuItem>
              ))
            }
          </TextField>
        </Stack>

        :

        <Stack spacing={3} className="stack">
          <TextField
            name="teachingGrade"
            label="Grade"
            variant="outlined"
            defaultValue="9"
            select
            onChange={onDataCollected}
          >
            {
              ["9", "10", "11", "12"].map((grade) => (
                <MenuItem key={grade} value={grade}>{grade}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            name="teachingBand"
            label="What band are you in?"
            variant="outlined"
            defaultValue="Concert II"
            select
            onChange={onDataCollected}
          >
            {
              [
                "Concert II",
                "Concert I",
                "Symphonic Band",
                "Wind Symphony"
              ].map((band) => (
                <MenuItem key={band} value={band}>{band}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            name="teachingInstrument"
            label="What instrument would you like to teach?"
            variant="outlined"
            defaultValue="Flute"
            select
            onChange={onDataCollected}
          >
            {
              instruments.map((instrument) => (
                <MenuItem key={instrument} value={instrument}>{instrument}</MenuItem>
              ))
            }
          </TextField>
          <FormControl>
            <InputLabel id="demo-simple-select-label">What distinctions do you have?</InputLabel>
            <Select
              name="distinctions"
              label="What distinctions do you have?"
              variant="outlined"
              defaultValue={["None"]}
              multiple
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'lightblue',
                    '& .MuiMenuItem-root': {
                        backgroundColor: 'white'
                    },
                    '& .MuiMenuItem-root:hover': {
                        backgroundColor: 'lightgrey'
                    },
                    // for some reason this doesnt work:
                    // '& .Mui-selected': {
                    //   backgroundColor: 'red'
                    // }
                  }
                },
              }}
              onChange={onDataCollected}
            >
              {
                [
                  "None",
                  "TMEA Freshman Region Band",
                  "TMEA Region Symphonic Band",
                  "TMEA Region Wind Ensemble/Area Qualified",
                  "TMEA All-State Band",
                  "UIL Class 1 solo: Division 1 Rating",
                  "UIL Class 1 ensemble: Division 1 Rating"
                ].map((distinction) => (
                  <MenuItem key={distinction} value={distinction}>{distinction}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <TextField
            name="tutorSettingPreference"
            label="Would you like to instruct in-person or virtually?"
            variant="outlined"
            defaultValue="No Preference"
            select
            onChange={onDataCollected}
          >
            {
              ["No Preference", "In-Person", "Virtual"].map((choice) => (
                <MenuItem key={choice} value={choice}>{choice}</MenuItem>
              ))
            }
          </TextField>
        </Stack>

        }

        <YellowButton onClick={() => {
          // check password and confirm password match
          // if (collectedData.password)
        }}>Submit</YellowButton>

      </Stack>
    </Background>
  )
}

export default Register