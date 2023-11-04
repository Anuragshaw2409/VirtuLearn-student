import React, { useEffect, useState } from 'react'
import CourseItemTeacher from './CourseItemTeacher'
import CreateCourse from './CreateCourse'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AllContext from './Context/AllContext'


function CoursesTeacher() {
  document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"
  const navigate = useNavigate();

  const {courses, fetchcourses} = useContext(AllContext);
  useEffect(()=>{
    fetchcourses();
  },[]);

 
  
  
  
  
  
  return (
    <> 
   
      <div className="greet w-full h-20 flex  justify-between mt-5 border-2 border-white">

        <div className="left flex ">

        <div className="avatar m-3 bg-white h-16 w-16 justify-center flex rounded-full">
        <i class="fa-solid fa-user text-5xl mt-1" style={{color:"#5E17EB"}}></i>
        </div>
        <div className="user m-2">
        <h1 className='text-2xl font-bold text-white'>Hello, Devansh</h1>
        <h1 className='text-md font-thin text-white'>devanshdav@gmail.com</h1>
        </div>
        </div>

        <div className="middle">
            <h1 className='font-bold  text-slate-100 text-5xl'>Courses</h1>

        </div>


        <div className="right flex pr-5 pt-3 items-center">
            <div className="div flex items-center">
                <div className='w-10 h-10 rounded-full bg-white pl-1 pt-0.5 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-black' onClick={(e)=>{navigate('/create')}}>
                    <i class="fa-solid fa-plus text-4xl" style={{color:"#FF66C4"}}></i>
                </div>
                <div className="head ml-4">
                    <h1 className='text-lg font-bold text-white'>Create New</h1>
                    <h1 className='text-lg font-bold text-white'>Course</h1>
                </div>
            </div>

        </div>


      </div>

    <div className="courses-Container w-full h-auto flex justify-evenly mt-20 flex-wrap">
    
    {courses.map((course)=><CourseItemTeacher courseContent={course}/>)  }

    </div>




    </>
  )
}

export default CoursesTeacher
