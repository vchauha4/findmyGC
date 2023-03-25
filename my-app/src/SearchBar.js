import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


 function SearchBar({setCourse}) {
  const [courseList, setCoursList] = React.useState(['loading...'])

  
  React.useEffect(function(){
    axios
      .get("http://localhost:3001/courses")
      .then((response)=>setCoursList(response.data))
  },[courseList]);
  

  return (
    <Stack spacing={2} sx={{ width: "30%" , backgroundColor: 'white'}}>

      <Autocomplete
        
        id="free-solo-2-demo"
        onChange={(event, value) => setCourse(value)}
        disableClearable
        options={courseList}
        renderInput={(params) => (
            
          <TextField
            
            {...params}
            label="Search Course"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            
           
          />
        )}
      />
      

    </Stack>
    
  );
}
export default SearchBar;

