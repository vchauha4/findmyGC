

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function AddNewGroup() {
  const [course, setCourse] = React.useState('aaaaaaaaaaa');
  const [groupChat, setGroupChat] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = () =>{
    console.log(groupChat)
    console.log(description)

  
  }
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
          onChange = {(event)=>{setGroupChat(event.target.value)}}
          
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
          onChange = {(event)=>{setDescription(event.target.value)}}
        />
      </div>
    </Box>
    <Button variant="contained" 
  
    ><Link onClick ={handleSubmit} to="/" style={{ textDecoration: 'none', color:'white' }}>Submit</Link></Button>

    </Grid>
  );
}