import Typography from '@mui/material/Typography';
import * as React from 'react';
import axios from "axios"
import Links from './DisplayMGroups';
import key from "./apiKey"

export default function Inner({department}){
    const [theCourses,setTheCourses] = React.useState([{course:'Loading...'}])
    department = department.replace(/ /g,"%20")
    department = department.replace("/","%2F")
    console.log(key.coursesList);
    React.useEffect(function(){
        axios
          .get(key.coursesList+department)
          .then((response)=>setTheCourses(response.data))
          .then((error)=>console.log(error))
      },[theCourses,department]);
    
    return(
        <div >
        {theCourses.map(theCourse=>(
            <div key={theCourses.indexOf(theCourse)}>

        
                <Typography className="course" title={theCourse.course}>
                    Course: {theCourse.course}
                </Typography>
                <Typography>
                    messenger group links: <Links messengerList={theCourse.messengerGroups}></Links>
                </Typography>
            </div>
            ))}
            
        </div>
    );
}