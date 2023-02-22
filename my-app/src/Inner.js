import Typography from '@mui/material/Typography';
import * as React from 'react';
import axios from "axios"

export default function Inner({department}){
    const [theCourses,setTheCourses] = React.useState([''])
    department = department.replace(" ","%20")
    department = department.replace("/","%2F")

    React.useEffect(function(){
        axios
          .get("http://localhost:3001/courses/"+department)
          .then((response)=>setTheCourses(response.data))
          .then((error)=>console.log(error))
      })
    return(
        <div>
        {theCourses.map(theCourse=>(
            <Typography className="course" key={theCourse.course} >
              {theCourse.course}
            </Typography>
            ))}
        </div>
    );
}