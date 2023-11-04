import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';




function Home() {
  const [cred, setCred] = useState({ email: "", password: "" });
  function handleOnChange(e) {
    setCred({ ...cred, [e.target.id]: e.target.value });

  }
  const navigate = useNavigate();

  function onClickHandle(){
    navigate('/howtouse');

  }


  async function submitCreds(e) {
    e.preventDefault();

    const url = "http://127.0.0.1:5000/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        "email":cred.email,
        "password": cred.password
      })
    });
    const data = await response.json();
    console.log(data);
    if(data==="Invalid credentials")
      alert("Invalid Credentials");
    else{
    localStorage.setItem('authToken', data.authToken);
    localStorage.setItem('isTeacher', data.isTeacher);
    localStorage.setItem('loggedin', true);

    navigate('/dashboard');
    }
    
    
  }

  document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"

  return (
    <div className='w-full h-96 mt-20 mb-52 flex justify-between'>
      <div className="left pl-10">
        <h1 className='text-7xl text-white font-bold'>VirtuLearn</h1>
        <p className='text-white pl-1 mt-3 text-lg'>A platform where you can learn and grow</p>
        <button className='bg-yellow-500 text-white font-bold text-xl p-2 rounded-lg py-1 w-40 mt-5' onClick={onClickHandle}>How to use</button>
      </div>

      <div className="right w-1/3 pr-10">
        <div className="loginbox w-full my-auto bg-slate-100 p-5 rounded-3xl shadow-2xl">
          <div className="welcome w-full">
            <img src={logo} alt="" className='h-24 mt-0' />
            <h1 className='text-4xl mb-4'>VirtuLearn</h1>
            <h1 className='text-4xl mb-4'>Student Login</h1>

          </div>
          <form action="" onSubmit={submitCreds}>
            <label htmlFor="email" className='font-semibold text-xl'>Email Address</label>
            <br />
            <input type="text" id='email' className=' bg-slate-300 w-4/5 h-10 rounded-xl p-2  focus:outline-purple-700 ' onChange={handleOnChange} value={cred.email} required/>
            <br />
            <label htmlFor="password" className='font-semibold text-xl'>Password</label>
            <br />
            <input type="password" id='password' className=' bg-slate-300 w-4/5 h-10 rounded-xl p-2 focus:outline-purple-700 ' onChange={handleOnChange} value={cred.password} required/>
            <br />
            <button type='submit' className='bg-purple-700 mt-2 w-24 h-9 rounded-2xl text-white shadow-md font-bold hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 shadow-black' >Login</button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default Home
