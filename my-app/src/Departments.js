import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function SimpleAccordion() {

    const Test = ({stations,theCourses}) => (
        <div>
        {stations.map(station => (
        
       
      
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="station" key={station}>{station}</Typography>
        </AccordionSummary>

            

        <AccordionDetails>
        {theCourses.map(theCourse=>(
          <Typography className="course" key={theCourse.course} >
            {theCourse.course}
          </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
       ))}
      </div>
      ); 
      var theCourses = [{"course":"Medieval Studies 1025A/B INTRODUCTION TO THE MEDIEVAL WORLD","messengerGroups":[]},{"course":"Medieval Studies 4320F/G INDEPENDENT STUDY SEMINAR","messengerGroups":[]},{"course":"Medieval Studies 3320F/G DIRECTED READINGS IN MEDIEVAL STUDIES","messengerGroups":[]},{"course":"Medieval Studies 3022F/G INTRODUCTION TO MEDIEVAL MANUSCRIPTS","messengerGroups":[]},{"course":"Medieval Studies 1026A/B INTRODUCTION TO MEDIEVAL CULTURES AND LITERATURES","messengerGroups":[]},{"course":"Medieval Studies 1022 INTRODUCTION TO MEDIEVAL STUDIES","messengerGroups":[]}];
      var stations = ["Actuarial Science","American Studies","Analytics and Decision Sciences","Anatomy and Cell Biology","Anthropology","Applied Mathematics","Arabic","Art History","Arts and Humanities","Astronomy","Biochemistry","Biology","Biomedical Engineering","Biostatistics","Business Administration","Calculus","Canadian Studies","Centre for Global Studies","Chemical Biology","Chemical and Biochemical Engineering","Chemistry","Childhood and Social Institutions","Chinese","Civil and Environmental Engineering","Classical Studies","Communication Sciences and Disorders","Comparative Literature and Culture","Computer Science","Creative Arts","Dance","Digital Communication","Digital Humanities","Disability Studies","Earth Sciences","Economics","Education","Electrical and Computer Engineering","Engineering Science","English","Environmental Science","Epidemiology","Epidemiology and Biostatistics","Faculty of Information and Media Studies","Family Studies and Human Development","Film Studies","Financial Modelling","Foods and Nutrition","French","Geography","German","Global Great Books","Governance, Leadership and Ethics","Greek","Green Process Engineering","Health Sciences","Hebrew","Hindi","History","History of Science","Human Ecology","Human Rights Studies","Humanities","Indigenous Studies","Integrated Science","Intercultural Communications","Interdisciplinary Studies","International Relations","Italian","Italian Studies","Japanese","Jewish Studies","Kinesiology","Korean","Latin","Law","Leadership Studies","Linguistics","Management and Organizational Studies","Mathematics","Mechanical and Materials Engineering","Mechatronic Systems Engineering","Media, Information and Technoculture","Medical Biophysics","Medical Health Informatics","Medical Sciences","Medieval Studies","Microbiology and Immunology","Museum and Curatorial Studies","Music","Neuroscience","Nursing","One Health","Pathology","Persian","Pharmacology","Philosophy","Physics","Physiology","Physiology and Pharmacology","Political Science","Politics, Philosophy, and Economics","Portuguese","Psychology","Rehabilitation Sciences","Religious Studies","Russian","Scholars Electives","Science","Social Justice and Peace Studies","Social Science","Social Work","Sociology","Software Engineering","Spanish","Speech","Statistical Sciences","Studio Art","Thanatology","Theatre Studies","Theological Studies","Transitional Justice","Western Thought and Civilization","Women's Studies","World Literatures and Cultures","Writing"]; 
  return (

        <Test stations={stations} theCourses={theCourses}/>
  
  );
}