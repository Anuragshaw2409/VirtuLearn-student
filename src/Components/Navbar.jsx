import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, setLogin] = useState(localStorage.getItem('loggedin') === 'true');

  function handleLogout() {
    setLogin(false);
    localStorage.setItem('authToken', '');
    localStorage.setItem('loggedin', false);
    localStorage.setItem('isTeacher', false);

    navigate('/');
  }

  function handleLogin() {
    navigate('/');

    setLogin(true);
    
  }

  return (
    <>
      <div className="navbar w-full h-14 flex items-center mt-1 justify-between">
        <div className="container flex items-center">
          <img className="mx-5 h-14" src={logo} alt="" />
          <ul className="flex">
            <NavLink to={'/dashboard'}>
              <li className="mx-8 text-lg font-semibold text-white hover:border-white border-2 border-transparent p-2 rounded-3xl cursor-pointer ">
                Home
              </li>
            </NavLink>
            <NavLink to={'/courses'}>
              <li className="mx-8 text-lg font-semibold text-white hover:border-white border-2 border-transparent p-2 rounded-3xl cursor-pointer ">
                Courses
              </li>
            </NavLink>
            <NavLink to={'/about'}>

            <li className="mx-8 text-lg font-semibold text-white hover:border-white border-2 border-transparent p-2 rounded-3xl cursor-pointer ">
              About
            </li>
            </NavLink>
            <NavLink to={'/contact'}>
            <li className="mx-8 text-lg font-semibold text-white hover:border-white border-2 border-transparent p-2 rounded-3xl cursor-pointer ">
              Contact
            </li>

            </NavLink>
          </ul>
        </div>

        <div className="login flex mr-2">
          <ul className="flex space-x-3 px-5 h-10 justify-center items-center">
            {location.pathname === '/' ? (
              <li>
                <button
                  className="h-7 px-3 w-20 bg-purple-700 rounded-md font-semibold text-white shadow-md shadow-slate-900 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition duration-75"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="h-7 px-3 w-20 bg-purple-700 rounded-md font-semibold text-white shadow-md shadow-slate-900 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition duration-75"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
