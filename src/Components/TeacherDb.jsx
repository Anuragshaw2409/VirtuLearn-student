import React,{} from 'react'
import logo1 from '../assets/Todo/1.png'
import logo2 from '../assets/Todo/2.png'
import logo3 from '../assets/Todo/3.png'
import { useNavigate } from 'react-router-dom'



function TeacherDb() {
  document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"
  const navigate = useNavigate();
  


  

  return (
    <>
      <div className="greet w-full h-20 flex  justify-start mt-5">
        <div className="avatar m-3 bg-white h-16 w-16 justify-center flex rounded-full">
        <i className="fa-solid fa-user text-5xl mt-1" style={{color:"#5E17EB"}}></i>
        </div>
        <div className="user m-2">
        <h1 className='text-2xl font-bold text-white'>Hello, Devansh</h1>
        <h1 className='text-md font-thin text-white'>devanshdav@gmail.com</h1>
        </div>
      </div>


      <div className="hero w-full text-center text-slate-100 text-6xl font-bold">
        <h1>Hey there!</h1>
        <h2>What would you like to do?</h2>
      </div>

      <div className="cards h-80 flex justify-evenly mt-16 ">


        <div className="card h-full w-72 rounded-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-150 " onClick={(e)=>{navigate('/courses')}}>
            <div className="image flex justify-center">
                <img src={logo1} className='h-40' alt="" />
            </div>
            <div className="text bg-white w-full h-1/2 text-center rounded-xl shadow-2xl">
                <h1 className='text-xl font-bold
                '>Your Course</h1>
                <p className='text-md p-2'>To create a course, simply click on the 'Create Course' button to begin crafting your educational content</p>
            </div>
        </div>


        <div className="card h-full w-72 rounded-2xl  cursor-pointer hover:scale-110 transition ease-in-out duration-150" onClick={(e)=>{navigate('/register')}}>
            <div className="image flex justify-center">
                <img src={logo2} className='h-40' alt="" />
            </div>
            <div className="text bg-white w-full h-1/2 text-center rounded-xl shadow-2xl">
                <h1 className='text-xl font-bold
                '>Student Registration</h1>
                <p className='text-md p-2'>To complete student registration, please click on the 'Student Registration' button</p>
            </div>
        </div>


        <div className="card h-full w-72 rounded-2xl cursor-pointer hover:scale-110 transition ease-in-out duration-150" onClick={()=>navigate('/students')}>
            <div className="image flex justify-center">
                <img src={logo3}  className='h-40'alt="" />
            </div>
            <div className="text bg-white w-full h-1/2 text-center rounded-xl shadow-2xl">
                <h1 className='text-xl font-bold
                '>Progress Report</h1>
                <p className='text-md p-2'>View Student's Progress report . Check thier performance</p>
            </div>
        </div>
      </div>


    </>
  )
}

export default TeacherDb
