import React, { useState } from 'react'
import DeleteCourse from './DeleteCourse'
import EditCourse from './EditCourse';



function CourseItemTeacher({ courseContent }) {
  const [delmodal, setDelmodal] = useState(false);
  const [editmodal, setEditmodal] = useState(false);
  (delmodal || editmodal) ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  function handleDelete() {
    setDelmodal(!delmodal)
    window.scrollTo({ top: 0, behavior: "smooth" });



  }

  function handleEdit() {
    setEditmodal(!editmodal)
    window.scrollTo({ top: 0, behavior: "smooth" });


  }


  return (
    <>
      {delmodal && <DeleteCourse id={courseContent._id} modaltoggle={handleDelete} />}
      {editmodal && <EditCourse courseContents={courseContent} modaltoggle={handleEdit} />}
      <div className="container h-96 rounded-3xl w-1/4  overflow-hidden text-center bg-slate-200 shadow-xl mx-3 my-3" >

        <iframe className='w-full h-3/5' src={courseContent.videoUrl} title={courseContent.name} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h1 className='text-lg font-bold'>{courseContent.name}</h1>
        <button className=' text-2xl mx-6 hover:scale-125 transition ease-in-out duration-150'><i className="fa-solid fa-trash" onClick={handleDelete}></i></button>

        <button className=' bg-yellow-400 px-5 py-3 rounded-2xl mt-5 font-bold text-xl hover:bg-yellow-500'>Enroll Students</button>
        <button className=' text-2xl mx-6 hover:scale-125 transition ease-in-out duration-150'><i className="fa-solid fa-pen-to-square" onClick={handleEdit}></i></button>
      </div>

    </>
  )
}

export default CourseItemTeacher
