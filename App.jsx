import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import Home from './src/Components/Home'


import HowToUse from './src/Components/HowToUse'
import TeacherDb from './src/Components/TeacherDb'
import StudentDB from './src/Components/StudentDB'
import CoursesTeacher from './src/Components/CoursesTeacher'

import CreateCourse from './src/Components/CreateCourse'

import Layout from './src/Layout'
import AddStudent from './src/Components/AddStudent'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import StudentProgress from './src/Components/StudentProgress'
import About from './src/Components/About'
import CoursesStudent from './src/Components/CoursesStudent'
import Contact from './src/Components/Contact'




const App = () => {
   
   const loggedin = localStorage.getItem('loggedin');
   const isTeacher = localStorage.getItem('isTeacher');
   console.log(isTeacher);




    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route path='' element={<Home />} />
                        <Route path='howtouse' element={<HowToUse />} />
                        <Route path='dashboard' element={<StudentDB/>} />
                        <Route path='courses' element={<CoursesStudent />} />
                                            
                       
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />

                    </Route>


                   
                   
                    





                </Routes>

            </Router>


        </>
    )
}

export default App