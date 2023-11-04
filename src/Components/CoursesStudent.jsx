import React, { useEffect } from 'react'
import CourseItemStudent from './CourseItemStudent'
import AllContext from './Context/AllContext'
import { useContext } from 'react'
function CoursesStudent() {
    document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"
    
  
    const {courses, fetchcourses} = useContext(AllContext);
    useEffect(()=>{
      fetchcourses();
    },[]);

    return (
        <>
            <div className="greet w-full h-20 flex  justify-between mt-5 border-2 border-white">

                <div className="left flex ">

                    <div className="avatar m-3 bg-white h-16 w-16 justify-center flex rounded-full">
                        <i class="fa-solid fa-user text-5xl mt-1" style={{ color: "#5E17EB" }}></i>
                    </div>
                    <div className="user m-2">
                        <h1 className='text-2xl font-bold text-white'>Hello, Anurag</h1>
                        <h1 className='text-md font-thin text-white'>shawanurag2020@gmail.com</h1>
                    </div>
                </div>

                <div className="middle">
                    <h1 className='font-bold  text-slate-100 text-5xl'>Courses</h1>

                </div>


                

                


            </div>

            <div className="courses-Container w-full h-auto flex justify-evenly mt-20 flex-wrap">
    
    {courses.map((course)=>{
        console.log(course);
        return <CourseItemStudent courseContent={course}/>})  }

    </div>
        </>
    )
}

export default CoursesStudent
