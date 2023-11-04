import React, { useState } from 'react'
import ViewCourse from './ViewCourse';

function CourseItemStudent({courseContent}) {
    const[view, setView]=useState(false);

    document.body.style.overflow = "auto"
   

    function handleClick(){
        setView(!view);
    }
    return (
        <>
            {view&&<ViewCourse coursecontent={courseContent} modaltoggle={handleClick}/>}
            <div className="container h-96 rounded-3xl w-1/4  overflow-hidden text-center bg-slate-200 shadow-xl mx-3 my-3" >

                <iframe className='w-full h-3/5' src={courseContent.videoUrl} title={courseContent.name} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <h1 className='text-lg font-bold'>{courseContent.name}</h1>
               

                <button className=' bg-yellow-400 px-5 py-3 rounded-2xl mt-5 font-bold text-xl hover:bg-yellow-500' onClick={handleClick}>View Course</button>
                
            </div>

        </>
    )
}

export default CourseItemStudent
