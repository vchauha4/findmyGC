

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function SearchRes({searchResult}) {

  const[searchRes,setSearchRes] = React.useState('');

  searchResult = searchResult.replace(/ /g,"%20");
  searchResult = searchResult.replace("/","%2F");

  React.useEffect(function(){
      axios
        .get("http://localhost:3001/gc/"+searchResult)
        .then((response)=>setSearchRes(response.data))
        .then((error)=>console.log(error))
    })
  return (
    

      <Typography variant="h3" gutterBottom sx={{marginLeft:'20%'}}>
        Search:
        <Typography>
          MessengerGroup:{searchRes.messengerGroups}
        </Typography>
      </Typography>


  );
}