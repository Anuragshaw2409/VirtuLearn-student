import React from 'react'
import { useContext } from 'react';
import AllContext from './Context/AllContext';

function DeleteCourse({id, modaltoggle}) {
    
    const {fetchcourses}=useContext(AllContext);

   async function deleteCourse(){
    const url =`http://127.0.0.1:5000/api/course/deletecourse/${id}`
    const response= await fetch(url, {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "authToken": localStorage.getItem('authToken')

        }
    });
    const data = await response.json();
    alert(data);

    modaltoggle();
    fetchcourses();
    

    }


    return (
        <>
            <div className="overlay h-screen w-screen absolute top-0 left-0 bg-slate-700 bg-opacity-90">

                <div className={"deletebox relative h-40 w-96 bg-slate-50 mx-auto mt-64 rounded-xl shadow-xl"}>
                    <div className="text pt-6 px-4 w-full">
                        <p className='text-center font-bold text-2xl '>Are you sure you want to delete this Course?</p>
                    </div>
                    <div className="options w-full mt-5 flex justify-evenly">
                        <button className='border-2 border-purple-700  w-24 h-10 rounded-xl font-semibold text-xl text-black hover:bg-purple-700 hover:text-white hover:shadow- shadow-black transition-all' onClick={modaltoggle}>No</button>
                        <button className='border-2 border-purple-700  w-24 h-10 rounded-xl font-semibold text-xl text-black hover:bg-purple-700 hover:text-white hover:shadow- shadow-black  transition-all' onClick={deleteCourse}>Yes</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default DeleteCourse
