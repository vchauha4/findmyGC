

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function AddNewGroup() {


  const url = 'http://localhost:3001/departments';
  
  const getAllDepts = () => {
      axios.get(url)
      .then((response)=>{
        console.log(response.data);
      })
  }
  getAllDepts();
  return (
    
    <Grid container justify ="center" alignItems="center" direction = "column" marginTop={"5%"}>
    <SearchBar id = "course-selection"/>
    <h1>{" "}</h1>
    
    <TextField

          required
          id="group-required"
          label="Group Chat Link"
          sx={{width:'465px'}}
          const message = ""
          
        />
    <Box    
    
      component="form"
      marginTop={"2.5%"}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '465px'},
      }}
      noValidate
      autoComplete="off"
    >
      <div >

        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
    </Box>
    <Button variant="contained" ><Link to="/" style={{ textDecoration: 'none', color:'white' }}>Submit</Link></Button>

    </Grid>
  );
}