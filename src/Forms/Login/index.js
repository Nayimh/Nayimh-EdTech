
import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import {
  resetuser,
  loginUser,
} from "../../features/auth/authSlice.js";


function Login() {

    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    });
  
  const formOptions = { resolver: yupResolver(validationSchema) };


 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);
  
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/dashboard");
   
    }
    dispatch(resetuser());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;

    const logInfo = {
      email,
      password,
    };

    dispatch(loginUser(logInfo));


    // setIsloading(true);
    // axios.post(
    //   "https://classroommern.herokuapp.com/user/login",
    //   logInfo
    // ).then(resp => {
    //   setIsloading(false);
    
    //   // localStorage.setItem("token", resp?.data?.token);
    
    
    //   toast.success(
    //     ` ${resp?.data?.success} "Login Successfull"`,
    //     {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     }
    //   );
      
    //   navigate('/dashboard')
    // }).catch((err) => {
 
    //   setIsloading(false)
    //    toast.error(`🦄  ${err.message} `, {
    //      position: "top-center",
    //      autoClose: 5000,
    //      hideProgressBar: false,
    //      closeOnClick: true,
    //      pauseOnHover: true,
    //      draggable: true,
    //      progress: undefined,
    //    });

    // } )
    
    reset();
  };

  return (
    <div className="container mx-auto h-[100vh] flex  justify-center items-center">
      <div className="my-2">
        <ToastContainer />
      </div>
      <div className=" h-[500px] flex flex-col justify-center items-center sm:w-full md:w-[750px] mx-auto bg-slate-200 px-4 py-10 md:px-10  rounded-lg shadow-lg ">
        <h1 className="text-indego text-2xl md:text-3xl font-bold text-center mb-5">
          {" "}
          Login Form{" "}
        </h1>
        {!isLoading ? (
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
                placeholder="Email"
                name="email"
                type="email"
                {...register("email", {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                } focus:outline-none w-full h-8 p-4 bg-slate-300 rounded`}
              />
              <div className="text-red-500">
                {errors.email?.message}
              </div>
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

                  minLength: 4,
                })}
                placeholder="Your Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">
                  {" "}
                  "Password is required"{" "}
                </p>
              )}
            </div>

            <input
              className="bg-lightindego text-slate-50 p-2 rounded cursor-pointer"
              type="submit"
            />
          </form>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-indego">
              {" "}
              Loading...{" "}
            </h1>
          </div>
        )}
        <div className="mt-5">
          <h1 className=" text-lg ">
            {" "}
            New User?{" "}
            <Link to="/register">
              {" "}
              <span className="cursor-pointer text-lightindego text-base">
                {" "}
                Please Register{" "}
              </span>{" "}
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
