import React, { useState } from "react";


import AllContext from "./AllContext";

const ContextProvider =({children})=>{

const [courses, setCourses]=useState([]);


async function fetchcourses(){

    const url = "http://127.0.0.1:5000/api/course/fetchcourses";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authToken": "eyJhbGciOiJIUzI1NiJ9.NjU0M2E2ZTk1OTBmOTcwODgwMjg1NWQx.1P0_DiJ5HB2IgS-axllpWEX6Y6_lAUEbbaQ9aBKnufg"

      }
      })
      
      const data = await response.json();
      console.log(data);
      setCourses(data);
    }







    return(
        <AllContext.Provider value={{courses, fetchcourses}} >
            {children}
        </AllContext.Provider>
    );


}
export default ContextProvider