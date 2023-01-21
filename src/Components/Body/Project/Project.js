import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
  const projects = [
    {
      id:1,
      "ProjectName":"GST Online Admissions System 2021",
      "Details":`This programme aids ambitious students who wish to apply to Jatiya Kabi Kazi Nazrul Islam University Approximately 29,000 students used the system, and they were able to finish the entire application process, including the online payment system. They might view their merit position after the application deadline. The entire process was automated.`,
      "Technology":{

      'Front end Technology': 'html5, css3, javascript',
      'Front end Library': 'Bootstrap',
      'Backend': 'PHP7',
      'Database': 'MySql',
      'Project Duration': '2 months',
      'Project Role': 'Developer'
      },
      "ProjectImage":"",
      "LiveLink":"https://gstadmission.jkkniu.edu.bd/login.php"
    },
    {
      id:2,
      "ProjectName":"GST Online Admissions System 2021",
      "Details":"lorem ipsum",
      "ProjectImage":"",
      "LiveLink":""
    }
  ];
    return (
        <div>
        <p style={{fontSize:'30px',borderBottom:'5px solid gray',padding:'15px',color:'blue'}}>
      Projects
      </p>
      <div className="row">
        {
          projects.map((item)=>(
            <ProjectCard key ={item.id} details={item}></ProjectCard>
          ))
        }
      </div>
        </div>
    )
}