
import * as React from 'react';

import Link from '@mui/material/Link';


export default function Links({messengerList}) {
    const[mList,setMList] = React.useState([]);

    if(messengerList !== undefined){
        setMList(messengerList)
    }
  return (
    <div>
    {mList.map(messenger=>(
        
        <Link href={messenger}>
            {messenger+"  "}
        </Link>
        
        ))}
    </div>
  );
}
