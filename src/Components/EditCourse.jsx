import React, { useState } from 'react'

function EditCourse({courseContents, modaltoggle}) {
  const [editedCourse, setEditedCourse]=useState({...courseContents})

  function handleEditing(e){
    setEditedCourse({...editedCourse,[e.target.id]:e.target.value});
  }

  function handleSubmit(){

  }





  return (
    <>
      <div className="absolute top-0 left-0 overlay h-screen w-full bg-slate-700 bg-opacity-90 z-50" >

        <div className="EditNote-container w-full h-3/6  z-50 ">
          <div className={`EditNote relative bg-slate-100 my-24 mx-auto rounded-2xl w-96 min-h-3/4 shadow-xl transition ease-in-out duration-150 `}>
            <div className="close-icon w-full text-right pr-3 text-lg"><i className="fa-solid fa-xmark cursor-pointer" onClick={modaltoggle}></i></div>


            <form action="" className=' pt-4 px-6' onSubmit={handleSubmit}>

              <label htmlFor="name" className='font-semibold font-mono'> Edit Name:</label>
              <br />
              <input type="text" className='mx-2 border border-purple-700 w-full rounded-xl h-9 p-2 font-medium' id='name' value={courseContents.name} onChange={handleEditing} required/>
              <br />
              <label htmlFor="videoUrl" className='font-semibold font-mono'> Edit Video URL:</label>
              <br />
              <input type="text" className='mx-2 border border-purple-700 w-full rounded-xl h-9 p-2 font-medium' id='videoUrl' value={courseContents.videoUrl} onChange={handleEditing} required/>
              <br />
              <label htmlFor="notesUrl" className='font-semibold font-mono'> Edit Notes URL:</label>
              <br />
              <input type="text" className='mx-2 border border-purple-700 w-full rounded-xl h-9 p-2 font-medium' id='notesUrl' value={courseContents.notesUrl} onChange={handleEditing} required/>

              <button type='submit' className='bg-purple-700 my-2 w-24 h-10 rounded-3xl text-white p-1 hover:bg-purple-800 ' >Save note</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditCourse
