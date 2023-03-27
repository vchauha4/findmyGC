
import * as React from 'react';

import Link from '@mui/material/Link';



export default function Links({messengerList}) {
    // eslint-disable-next-line
    var[mList,setMList] = React.useState([]);
    if(messengerList!==undefined &&messengerList.length>0){
        mList = messengerList;
    }
  return (
    <div style={{display:"inline"}}>
    {mList.map(thelink=>(
 
            <Link target="_blank" href={thelink} variant="body" style={{ paddingRight:'1%'}}>
                {thelink}
            </Link>
            
    ))}
        
    </div>
  );
}
