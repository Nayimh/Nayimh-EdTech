
import React, { useState } from 'react'
import {  useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css';
import StudentRegister from './StudentRegister';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Register() {


    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
      };

      const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
          .oneOf([Yup.ref('password')], 'Passwords must match'),
        firstName: Yup.string()
          .required("First Name is Required")
          .min(2, 'First Name must be at least 2 characters'),
        lastName: Yup.string()
          .required("last Name is Required")
          .min(2, 'last Name must be at least 2 characters'),
          email: Yup.string()
          .required("Email is required"),
        subjectName: Yup.string()
          .required("Subject Name is required")
          .min(3, " Subject Name Must be at least 3 characters "),
        experience: Yup.string()
          .required("Experience is required")
          .min(1, "Minimum 1 year experience is required"),
        qualification: Yup.string()
          .required("Qualification is required")

        
            
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
      formOptions
    );
    const onSubmit = (data) =>

        console.log(data);
    
  return (
    <div className="container mx-auto w-[100%] h-[100vh] bg-slate-50 flex  justify-center items-center">
      <div className="  flex flex-col justify-center items-center sm:w-full md:w-[750px] mx-auto bg-slate-200 px-4 py-10 md:px-10 rounded-lg shadow-lg ">
        <h1 className="text-indego text-2xl md:text-3xl font-bold text-center mb-5">
          {" "}
          Register Form{" "}
              </h1>
              <div className='py-6 flex gap-4 justify-center'>
                  <button
                  onClick={() => toggleTab(1)}
                      className={
                          toggle === 1 ? "active-tabs"  : "tabs"
                      }  >Teacher</button>
                  <button
                  onClick={() => toggleTab(2)}
                  className={
                    toggle === 2 ? "active-tabs"  : "tabs"
                } >Student</button>
        </div>
        <div className={toggle === 1
                        ? "  content active-content"
                        : "   content"}>
        <form
          className="flex flex-col w-full gap-6 "
          onSubmit={handleSubmit(onSubmit)}
              >
                  <div className="flex gap-4">
                      
                 
          <div className="flex flex-col gap-2 w-[50%]">
          <label
              htmlFor="LastName"
              className="text-lightindego font-medium"
            >
              {" "}
              First Name :
                </label>
                <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                            <div className="text-red-500">{errors.firstName?.message}</div>
                      
      
                      </div>

                      
          <div className="flex flex-col gap-2 w-[50%]">
            <label
              htmlFor="LastName"
              className="text-lightindego font-medium"
            >
              {" "}
              Last Name :
                </label>
                <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                            <div className="text-red-500">{errors.lastName?.message}</div>
                      
      
                      </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ">
                  <label
              htmlFor="email"
              className="text-lightindego font-medium"
            >
              {" "}
              Email :
          </label>
          <input name="email" type="email" {...register('email')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                            <div className="text-red-500">{errors.email?.message}</div>
      
          </div>
        
          <div className="flex flex-col gap-2 ">
          
          <label
          className="text-lightindego font-medium"
          >Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                            <div className="text-red-500">{errors.password?.message}</div>
            
                  </div>
        <div className="flex flex-col gap-2 ">
          <label
          className="text-lightindego font-medium"
          >Confirm Password</label>
          <input
            
            name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded `} />
                            <div className="text-red-500 ">{errors.confirmPassword?.message}</div>
          
                      
                  </div>
                  <div className="flex gap-4">
                      
                 
          <div className="flex flex-col gap-2 w-[50%]">
            <label
              htmlFor="FirstName"
              className="text-lightindego font-medium"
            >
              {" "}
              Subject Name :
            </label>
                      <input name="subjectName" type="text" {...register('subjectName')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                            <div className="text-red-500">{errors.subjectName?.message}</div>
      
      
                      </div>

                      
          <div className="flex flex-col gap-2 w-[50%]">
            <label
              htmlFor="LastName"
              className="text-lightindego font-medium"
            >
              {" "}
              Year of Experience :
            </label>
            <input name="experience" type="number" {...register('experience')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                            <div className="text-red-500">{errors.experience?.message}</div>        
              
                      </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <label
              htmlFor="LastName"
              className="text-lightindego font-medium"
            >
              {" "}
              Qualification :
            </label>
            <input name="qualification" type="text" {...register('qualification')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                            <div className="text-red-500">{errors.qualification?.message}</div>        
                      </div>
                  </div>
                
              <div className='flex gap-5 justify-start'>
          <input
            className="bg-lightindego w-[100px] text-slate-50 p-2 rounded cursor-pointer"
            type="submit"
            />
            <span className='w-[100px]'>
                <input
                 
                  onClick={()=> reset()}
            className="bg-lightindego w-[100%] text-slate-50 p-2 rounded cursor-pointer"
            type="Reset" 
            />

              </span>
              </div>
          </form>
          </div>
        <div className={toggle === 2
                        ? "  content active-content w-full"
                        : "   content"}>
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