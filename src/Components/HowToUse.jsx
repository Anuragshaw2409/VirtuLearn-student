import React from 'react'
import teacher from '../assets/avatr/teacher.png'
import student from '../assets/avatr/student.png'

function HowToUse() {
  document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"

  return (
    <>
      <div className="costainer h-auto w-full mt-20 text-center">
            
            <h1 className='font-bold  text-slate-100 text-5xl '>How To Use</h1>
            <h1 className='font-bold  text-slate-100 text-8xl '>VirtuLearn</h1>

      </div>

      <div className="image w-full h-40 flex justify-center mt-14
      ">
         <div className="image h-full">
         <img src={teacher} className='h-full' alt="" />
          <h1 className='text-white font-bold text-lg'>Guide For Teachers</h1>
          </div> 
         
      </div>

      <div className="container w-full h-auto my-10">
        <div className="box mx-auto bg-slate-100 text-left w-2/5 p-7 rounded-3xl shadow-2xl">
          <h1 className='text-lg font-bold
          '>Hello Teacher!</h1>
          <p>Welcome to VirtuaLearn an online LMS portal . Where you can create your course library and make your teaching journey more easy and comfortable </p>
          <h1 className='text-lg font-bold
          '>How it works ?</h1>
          <ul className='list-disc'>
            <li>You can create your course . Add video lectures , give notes and quizes to the students.</li>
            <li>You can register your students by just enrolling in the course</li>
            <li>You can access their progress reports in the your Dashboard</li>
          </ul>
        </div>
      </div>


      <div className="image w-full h-40 flex justify-center mt-14
      ">
         <div className="image h-full">
         <img src={student} className='h-full' alt="" />
          <h1 className='text-white font-bold text-lg'>Guide For Students</h1>
          </div> 
         
      </div>

      <div className="container w-full h-auto my-10">
        <div className="box mx-auto bg-slate-100 text-left w-2/5 p-7 rounded-3xl shadow-2xl">
          <h1 className='text-lg font-bold
          '>Hello Student!</h1>
          <p>Welcome to VirtuaLearn an online LMS portal . Where you can access the content provided by your teacher and can take quizes to check your progress </p>
          <h1 className='text-lg font-bold
          '>How it works ?</h1>
          <ul className='list-disc'>
            <li>Just login through your registered email ID.</li>
            <li>You can directly redirected to your Dashboard where you can access your content</li>
            
          </ul>
        </div>
      </div>


    </>
  )
}

export default HowToUse
