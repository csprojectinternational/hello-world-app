import React from 'react'
import TextField from '@mui/material/TextField'
import { Stack, Button, Typography, MenuItem } from '@mui/material';
import './Register.css'

// TODO:
// create dropdowns
// make confirm password work
// implement mandatory fields
// collect everything up into an array on submit

const Register = ({ isStudent }) => {

  return (
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
          // onChange={}
        />
        <TextField
          id="learningInstrument"
          label="What instrument are you learning?"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="studentSettingPreference"
          label="Would you like in-person or virtual lessons?"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="privateLessons"
          label="Are you currently registered in paid private lessons?"
          variant="outlined"
          // onChange={}
        />
      </Stack>

      :

      <Stack spacing={3} className="stack">
        <TextField
          id="teachingGrade"
          label="Grade"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="teachingBand"
          label="What band are you in?"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="teachingInstrument"
          label="What instrument would you like to teach?"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="distinctions"
          label="What distinctions do you have?"
          variant="outlined"
          // onChange={}
        />
        <TextField
          id="tutorSettingPreference"
          label="Would you like to instruct in-person or virtually?"
          variant="outlined"
          // onChange={}
        />
      </Stack>

      }

      <Button variant="contained" sx={{height: "3rem", backgroundColor: "lightgrey", ":hover": {backgroundColor: "white"}}} onClick={() => {
        console.log("hi");
      }}>Submit</Button>

    </Stack>
  )
}

export default Register