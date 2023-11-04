import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className='footer bg-slate-800 p-3 flex justify-around w-full mt-9'>
      <div className="left h-full flex justify-center  items-center"><img  className ='h-20 mx-2 ' src={logo}alt="" /> <h1 className='text-4xl font-bold text-white font-mono'>VirtuLearn</h1></div>
      <div className="mid items-center text-white">
        <ul>
            <li className='link cursor-pointer w-24 text-center p-1 rounded-md hover:bg-slate-700'>Contact us</li>
            <li className='link cursor-pointer w-24 text-center p-1 rounded-md hover:bg-slate-700'>About</li>
            <li className='link cursor-pointer w-24 text-center p-1 rounded-md hover:bg-slate-700'>Feedback</li>
        </ul>
      </div>
      <div className="right mr-5 text-white h-full items-center ">
        <h1 className='my-3'>Follow me on: </h1>
        <div className="link-container flex">

        <div className="link h-8 w-8 bg-slate-600 mx-3 rounded-full text-left justify-center items-center flex hover:bg-slate-900 "><a href="https://github.com/Anuragshaw2409" target='_Blank'><i className="animate-pulse fa-brands fa-github mx-1 hover:animate-ping"></i> </a></div>
        <div className="link h-8 w-8 bg-slate-600 mx-3 rounded-full text-left justify-center items-center flex hover:bg-slate-900 "><a href="https://www.linkedin.com/in/anurag-shaw-355a5b204?originalSubdomain=in" target='_Blank'> <i className="animate-pulse fa-brands fa-linkedin mx-1 hover:animate-ping"></i></a></div>
        <div className="link h-8 w-8 bg-slate-600 mx-3 rounded-full text-left justify-center items-center flex hover:bg-slate-900 "> <a href="https://www.instagram.com/anurag_24_09/" target='_Blank'> <i className="animate-pulse fa-brands fa-instagram mx-1 hover:animate-ping"></i></a></div>
        </div>
      </div>

    </div>
  )
}

export default Footer
