
import * as React from 'react';

import Link from '@mui/material/Link';



export default function Links({messengerList}) {
    // eslint-disable-next-line
    var[mList,setMList] = React.useState([]);
    if(messengerList!==undefined &&messengerList.length>0){
        mList = messengerList;
    }
  return (
    <div >
    {mList.map(thelink=>(
        <div style={{flexDirection:'row',display: 'flex'}}>
            <Link target="_blank" href={thelink} variant="body">
                {thelink}
            </Link>
        </div>
    ))}
        
    </div>
  );
}
