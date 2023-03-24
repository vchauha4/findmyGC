

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function AddNewGroup() {
  var [course, setCourse] = React.useState('');
  const [groupChat, setGroupChat] = React.useState('');
  // eslint-disable-next-line
  const [description, setDescription] = React.useState('');

  function handleSubmit(){


    course = course.replace(/ /g,"%20");
    course =course.replace("/","%2F");
    
    var data = JSON.stringify({
    "link": groupChat
    });

    console.log(course);
    console.log(data);

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/addLink/'+course,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  
  }
  const validGCLink = ()=>{
    
    if (course.length>2 && groupChat.slice(0,13)==="https://m.me/"){
      return(false);
    }
    else{
      return(true);
    }
  }
  return (
    
    <Grid container justify ="center" alignItems="center" direction = "column" marginTop={"5%"}>
    <SearchBar id = "course-selection"
      setCourse={setCourse}
    />
    
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
      disabled={validGCLink()}
    ><Link onClick ={handleSubmit} to="/" style={{ textDecoration: 'none', color:'white' }}>Submit</Link></Button>

    </Grid>
  );
}