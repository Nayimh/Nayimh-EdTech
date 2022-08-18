import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit,formState: { errors }  } = useForm();
    const onSubmit = (data) =>

        console.log(data);

  return (
    <div className="container mx-auto h-[100vh] flex  justify-center items-center">
      <div className=" h-[500px] flex flex-col justify-center items-center sm:w-full md:w-[750px] mx-auto bg-slate-200 px-4 py-10 md:px-10  rounded-lg shadow-lg ">
        <h1 className="text-indego text-2xl md:text-3xl font-bold text-center mb-5">
          {" "}
          Login Form{" "}
        </h1>
        <form
          className="flex flex-col w-full gap-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="email"
              className="text-lightindego font-medium"
            >
              {" "}
              Email :
            </label>
                      <input
                          type="email"
              className="focus:outline-none w-full h-8 bg-slate-100 rounded p-4"
              {...register("mail", {
                required: true,
                  maxLength: 20,
                  
                  

              })}
              placeholder="Email"
                      />
            {errors.mail?.type === 'required' &&  <p className="text-red-500"> "Email is required" </p> }
      
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              htmlFor="name"
              className="text-lightindego font-medium"
            >
              Password :
            </label>
                      <input
                          type="password"
              className="focus:outline-none w-full h-8 bg-slate-100 rounded p-4"
              {...register("password", {
                required: true,
                  maxLength: 20,
                  
                minLength: 4
              })}
              placeholder="Your Password"
                      />
                      {errors.password?.type === 'required' &&  <p className="text-red-500"> "Password is required" </p> }
                      
          </div>

          <input
            className="bg-lightindego text-slate-50 p-2 rounded cursor-pointer"
            type="submit"
          />
              </form>
              <div className="mt-5">
                  <h1 className=" text-lg "> New User? <Link to='/register'> <span className="cursor-pointer text-lightindego text-base"> Please Register </span> </Link> </h1>
             </div>
      </div>
    </div>
  );
}

export default Login;
