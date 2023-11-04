import React, { useState } from 'react'

function CreateCourse() {
  document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"

  const [coursename, setCoursename]=useState('');
  const [vidurl, setVidurl]=useState('');
  const [Notesurl, setNotesurl]=useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const url="http://127.0.0.1:5000/api/course/createcourse"
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "authToken": localStorage.getItem('authToken')
        },
        body: JSON.stringify({
            name: coursename,
            videoUrl: vidurl,
            notesUrl: Notesurl
        })
    });
    const data = await response.json();
    alert(data);
    setCoursename('');
    setVidurl('');
    setNotesurl('');

  }
  


  return (
    <>
        <div className="head text-center mt-10">
            <h1 className='text-6xl font-bold text-white '>Create New Course</h1>
        </div>

        <div className="container w-full mt-16 h-96 flex justify-center ">

            <div className="box h-full  w-1/3 bg-white rounded-3xl overflow-hidden p-6">

                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="CourseName" className='text-2xl font-semibold'>Course Name</label>
                    <br />
                    <input className='border-2 border-black w-full mb-4 rounded-lg h-10 p-2' type="text" value={coursename} name="Coursename" id="CourseName" onChange={(e)=>{setCoursename(e.target.value)}} required/>

                    <br />

                    <label htmlFor="videourl" className='text-2xl font-semibold'>Video url</label>
                    <br />
                    <input className='border-2 border-black w-full mb-4 rounded-lg h-10 p-2 ' type="text" name="videourl" id="videourl" value={vidurl} onChange={(e)=>{setVidurl(e.target.value)}} required/>

                    <br />

                    <label htmlFor="Notesurl" className='text-2xl font-semibold'>Notes url</label>
                    <br />
                    <input className='border-2 border-black w-full mb-4 rounded-lg h-10 p-2' type="text" value ={Notesurl} name="Notesurl" id="Notesurl" onChange={(e)=>{setNotesurl(e.target.value)}} required/>
                    

                <div className="buttons flex justify-evenly">
                <button type ="submit" className='bg-blue-800 px-5 py-3 rounded-3xl text-lg font-semibold text-white hover:bg-blue-900
                '>Publish</button>
                </div>



                </form>
                



            </div>

        </div>

        
      
    </>
  )
}

export default CreateCourse
