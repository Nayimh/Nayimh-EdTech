
import React from 'react'


import { Link } from 'react-router-dom';
import './Register.css';
import StudentRegister from './StudentRegister';


function Register() {

 
    
  return (
    <div className="container mx-auto w-[100%] h-[100vh] bg-slate-50 flex  justify-center items-center">
      <div className="  flex flex-col justify-center items-center sm:w-full md:w-[750px] mx-auto bg-slate-200 px-4 py-10 md:px-10 rounded-lg shadow-lg ">
        <h1 className="text-indego text-2xl md:text-3xl font-bold text-center mb-5">
          {" "}
          Register Form{" "}
              </h1>
              
      
      
        
        <div className='w-full'>
                          <StudentRegister/>
          </div>
              <div className="mt-5">
                  <h1 className=" text-lg "> Already have an account? <Link to='/login'> <span className="cursor-pointer text-lightindego text-base"> Please Login </span> </Link> </h1>
             </div>
      </div>
    </div>
  )
}

export default Register