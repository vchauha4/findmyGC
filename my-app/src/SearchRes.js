

import * as React from 'react';

import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function SearchRes({searchResult}) {

  const[searchRes,setSearchRes] = React.useState([{messengerGroups:[]}]);

  searchResult = searchResult.replace(/ /g,"%20");
  searchResult = searchResult.replace("/","%2F");

  React.useEffect(function(){
      axios
        .get("http://localhost:3001/gc/"+searchResult)
        .then((response)=>setSearchRes(response.data))
        .then((error)=>console.log(error))
    },[searchRes,searchResult]);

  return (
    

      <Typography variant="h4" gutterBottom sx={{marginLeft:'20%'}}>
        Search:{searchRes[0].messengerGroups}
      </Typography>


  );
}