import { useState } from 'react';
import './App.css'
import {Box, Button, TextField, Alert, Typography} from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Box) ({
  border: "1px solid #ddd",
  maxWidth: 500,
  margin: "50px auto",
  padding: "20px",
  boxShadow: "3px 3px 10px rgba(0,0,0,0.1)"
});

const FileInput = styled("input")({
  display: "none"
});

function App() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    file: null
  });

  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");
  const [success, setSuccess] = useState(false);

  const errMsg = {};

  const validateForm = () => {

    // Validate Username - length should be greater than 4
    if(!formData.username || formData.username.length <= 4) {
      errMsg.username = "Username must be greater than 5 characters";
    }

    // Validate Email - should match the email pattern
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.email || !emailRegEx.test(formData.email)) {
      errMsg.email = "Invalid Email Address";
    }

    // TODO
    // Validate Password - test for password strength using regex
    // Confirm Password - test for password and confirm password should match

    // Validate DOB - Age should be greater than 18
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(formData.dob).getFullYear();
    const age = currentYear - birthYear;
    if(!formData.dob || age < 18) {
      errMsg.dob = "Age must be at least 18 years";
    }

    // Validate file size
    if(formData.file) {
      const fileSizeKb = formData.file.size / 1024;
      if(fileSizeKb > 5) {
        setFileError("File size must be less than 5KB")
      }
      else {
        setFileError("");
      }
    } else {
      setFileError("Please upload file");
    }


    setErrors(errMsg);
    return Object.keys(errMsg).length === 0;
  }

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  const handleFileChange = (e) => {
    setFormData({...formData, file: e.target.files[0]});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm()) {
      setSuccess(true);
    }
  }

  return (
    <>
       <FormContainer>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Username"
            name="username"
            fullWidth
            value={formData.username}
            onChange={changeHandler}
            error={!errors.username}
            helperText={errors.username}
          />

          <TextField 
            label="Email"
            name="email"
            fullWidth
            margin='normal'
            value={formData.email}
            onChange={changeHandler}
            error={!errors.email}
            helperText={errors.email}
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
            onChange={changeHandler}
            error={!errors.dob}
            helperText={errors.dob}
          />

          <label htmlFor='file-upload'>
            <FileInput 
              id="file-upload"
              type='file'
              onChange={handleFileChange}
            />
            <Button variant='outlined' component="span" fullWidth>
              Upload File
            </Button>
          </label>   
          {fileError && (
            <Typography color='error' mt={1}>
              {fileError}
            </Typography>
          )}


          <Button
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
          > Submit </Button>

          
        </form>
      </FormContainer>
    </>
  )
}

export default App
