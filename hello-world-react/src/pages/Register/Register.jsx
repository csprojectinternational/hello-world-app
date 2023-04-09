import React from 'react'
import TextField from '@mui/material/TextField'
import { Stack, Button, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './Register.css'
import { Link } from 'react-router-dom';

// TODO:
// create dropdowns
// make confirm password work
// implement mandatory fields
// collect everything up into an array on submit

const Register = ({ isStudent }) => {

  const buttonStyle = {
    height: "3rem",
    backgroundColor: "lightgrey",
    ":hover": {
      backgroundColor: "white"
    }
  }

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
  ]

  return (
    <div style={{position: "relative"}}>
      <Link to="/" style={{textDecoration: "none", position: "absolute", left: "10px", top: "calc(-10vmin + 10px)"}}>
        <Button variant="contained" sx={{...buttonStyle, height: "2rem"}}>
          BACK
        </Button>
      </Link>
      <Stack spacing={3} className="stack">
        <Typography variant="h4" color="initial" sx={{fontWeight: "bold"}}>
          SIGN UP AS A {isStudent ? "STUDENT" : "TUTOR"}
        </Typography>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="phone"
          label="Phone Number"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          // onChange={}
        />

        {isStudent ?

        <Stack spacing={3} className="stack">
          <TextField
            id="learningGrade"
            label="Grade"
            variant="outlined"
            defaultValue="6"
            select
            // onChange={}
          >
            {
              ["6", "7", "8"].map((grade) => (
                <MenuItem key={grade} value={grade}>{grade}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            id="learningBand"
            label="What band are you in?"
            variant="outlined"
            defaultValue="Beginner"
            select
            // onChange={}
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
            id="learningInstrument"
            label="What instrument are you learning?"
            variant="outlined"
            defaultValue="Flute"
            select
            // onChange={}
          >
            {
              instruments.map((instrument) => (
                <MenuItem key={instrument} value={instrument}>{instrument}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            id="studentSettingPreference"
            label="Would you like in-person or virtual lessons?"
            variant="outlined"
            defaultValue="No Preference"
            select
            // onChange={}
          >
            {
              ["No Preference", "In-Person", "Virtual"].map((choice) => (
                <MenuItem key={choice} value={choice}>{choice}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            id="privateLessons"
            label="Are you currently registered in paid private lessons?"
            variant="outlined"
            defaultValue="No"
            select
            // onChange={}
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
            id="teachingGrade"
            label="Grade"
            variant="outlined"
            defaultValue="9"
            select
            // onChange={}
          >
            {
              ["9", "10", "11", "12"].map((grade) => (
                <MenuItem key={grade} value={grade}>{grade}</MenuItem>
              ))
            }
          </TextField>
          <TextField
            id="teachingBand"
            label="What band are you in?"
            variant="outlined"
            defaultValue="Concert II"
            select
            // onChange={}
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
            id="teachingInstrument"
            label="What instrument would you like to teach?"
            variant="outlined"
            defaultValue="Flute"
            select
            // onChange={}
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
              id="distinctions"
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
              // onChange={}
            >
              {
                [
                  "None",
                  "TMEA Freshman Region Band",
                  "TMEA Region Symphonic Band",
                  "TMEA Region Wind Ensemble/Area qualified",
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
            id="tutorSettingPreference"
            label="Would you like to instruct in-person or virtually?"
            variant="outlined"
            defaultValue="No Preference"
            select
            // onChange={}
          >
            {
              ["No Preference", "In-Person", "Virtual"].map((choice) => (
                <MenuItem key={choice} value={choice}>{choice}</MenuItem>
              ))
            }
          </TextField>
        </Stack>

        }

        <Button variant="contained" sx={buttonStyle} onClick={() => {
          console.log("hi");
        }}>Submit</Button>

      </Stack>
    </div>
  )
}

export default Register