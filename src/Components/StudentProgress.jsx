import React, { useEffect, useState } from 'react'
import Student from './Student';

function StudentProgress() {
  document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"
  const [students, setStudents] =useState([]);

  async function fetchStudentlist(){
    const url="http://127.0.0.1:5000/api/auth/fetchstudents";
    const response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = await response.json();
    setStudents(data);


  }
  useEffect(()=>{
    fetchStudentlist()
  },[]);

  return (
    <>
      <div className="courses-Container w-full h-auto ">
       <div className="studbox flex w-2/3 mt-20 flex-wrap justify-center mx-auto">

            {students.map((student)=>{return <Student name={student.name} email={student.email} marks={"0/0"} key={student._id}/>
            })}
       </div>

            

        

      
      </div>
    </>
  )
}

export default StudentProgress
