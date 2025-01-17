import { useState } from 'react';
import './App.css'
import {Box, Button, TextField, Alert} from "@mui/material";
// import { styled } from "@mui/system";

// const FormContainer = styled(Box) ({
//   border: "1px solid red"
// });

// const FileInput = styled("input")({
//   display: "none"
// });

function App() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const errMsg = {};

  const validateForm = () => {
    if(!formData.username || formData.username.length <= 4) {
      errMsg.username = "Username must be greater than 5 characters";
    }
  }

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  return (
    <>
      {/* <FormContainer> */}
        <form>
          <TextField 
            label="Username"
            name="username"
            fullWidth
            value={formData.username}
            onChange={changeHandler}
          />

          <TextField 
            label="Email"
            name="email"
            fullWidth
            margin='normal'
          />

          <TextField 
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin='normal'
          />

          <TextField 
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            margin='normal'
          />

          <TextField 
            label="Date of Birth"
            name="dob"
            type="date"
            fullWidth
            margin='normal'
            InputLabelProps={{shrink:true}}
          />

          {/* <label htmlFor='file-upload'
            <FileInput 
              id="file-upload"
            />
          /> */}

          <Button
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
          > Submit </Button>

          
        </form>
      {/* </FormContainer> */}
    </>
  )
}

export default App
