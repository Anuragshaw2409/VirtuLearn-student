import React from 'react'

function Student({name, email, marks}) {
    console.log("Called");
  return (
    <>
      <div className=" w-full h-14 flex justify-evenly bg-slate-50 my-2 rounded-3xl items-center ">
        <div className="name"><h1>{name}</h1></div>
        <div className="email"><h1>{email}</h1></div>
        <div className="marks"><h1>{marks}</h1></div>
      </div>
    </>
  )
}

export default Student
