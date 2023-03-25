
import * as React from 'react';

import Link from '@mui/material/Link';


export default function Links({messengerList}) {
    const[mList,setMList] = React.useState([]);
    if(messengerList!==undefined &&messengerList.length>0){
        setMList(messengerList);
    }
  return (
    <div >
    {mList.map(link=>(
        

        ))}
        
    </div>
  );
}
