import React, { useState } from 'react'

function AddStudent() {
    document.body.style.background = "linear-gradient(90deg, #5E17EB,#FF66C4)"
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const url = "http://127.0.0.1:5000/api/auth/createuser"

        const response =await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password,
                "isTeacher": "false"

            })
        })
       

        const data = await response.json();
        if(data.UserCreated) {alert("User Created Successfuly")}
        if(!data.UserCreated) {alert("Cannot create user due to server error")}
        if(data ==="User already exists") {alert(data)}
        

        
        setname('');
        setPassword('');
        setEmail('');
        
    }


    return (
        <>
            <div className="head text-center mt-10">
                <h1 className='text-6xl font-bold text-white '>Add a student</h1>
            </div>

            <div className="container w-full mt-16 h-auto flex justify-center ">
                <div className="box h-full  w-96 bg-white rounded-3xl overflow-hidden p-6">

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className='text-lg font-bold'>Student name</label>
                        <br />
                        <input type="text" name="name" id="name" value={name} className='w-2/3 p-2 text-md border-2 border-black rounded-lg' onChange={(e) => { setname(e.target.value) }} required/>
                        <br />
                        <label htmlFor="email" className='text-lg font-bold'>Student email</label>
                        <br />
                        <input type="text" name="email" id="email" value={email} className='w-2/3 p-2 text-md border-2 border-black rounded-lg' onChange={(e) => { setEmail(e.target.value) }} required/>
                        <br />
                        <label htmlFor="password" className='text-lg font-bold'>Student password</label>
                        <br />
                        <input type="text" name="password" id="password" value={password} className='w-2/3 p-2 text-md border-2 border-black rounded-lg' onChange={(e) => { setPassword(e.target.value) }} required/>
                        <br />

                        <button type="submit" className='bg-green-600 px-5 py-2 mt-2 rounded-2xl hover:bg-green-700 text-white' >Add Student</button>

                    </form>


                </div>


            </div>
        </>
    )
}

export default AddStudent
