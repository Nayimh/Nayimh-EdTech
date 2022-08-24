import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function StudentRegister() {
  const [loading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    email: Yup.string().required("Email is required"),
    name: Yup.string()
      .required("Full Name is required")
      .min(4, "Name must be longer then 4 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formOptions);

  const onSubmit = (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.confirmPassword;
    const role = data?.role;

    const regInfo = {
      name,
      email,
      password,
      role,
    };

    setIsloading(true);
    axios
      .post(
        "https://classroommern.herokuapp.com/user/register",
        regInfo
      )
      .then((resp) => {
        setIsloading(false);
        setSuccess(resp?.data.success);
        toast.success(`🦄 ${resp?.data?.success} `, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        setIsloading(false);
        setError(err);

        toast.error(`🦄  ${err?.message} `, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    reset();
  };

  return (
    <div className="w-full">
      {!loading ? (
        <form
          className="flex flex-col w-full gap-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-[100%]">
              <label
                htmlFor="FullName"
                className="text-lightindego font-medium"
              >
                {" "}
                Name :
              </label>
              <input
                placeholder="Your Name"
                name="name"
                type="text"
                {...register("name")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                } focus:outline-none w-full h-8 p-4 bg-slate-300 rounded`}
              />
              <div className="text-red-500">
                {errors.name?.message}
              </div>
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
            <input
              placeholder="Email"
              name="email"
              type="email"
              {...register("email")}
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              } focus:outline-none w-full h-8 p-4 bg-slate-300 rounded`}
            />
            <div className="text-red-500">
              {errors.email?.message}
            </div>
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-lightindego font-medium">
              Password
            </label>
            <input
              placeholder="Password"
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              } focus:outline-none w-full h-8 p-4 bg-slate-300 rounded`}
            />
            <div className="text-red-500">
              {errors.password?.message}
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-lightindego font-medium">
              Confirm Password
            </label>
            <input
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              } focus:outline-none w-full h-8 p-4 bg-slate-300 rounded `}
            />
            <div className="text-red-500 ">
              {errors.confirmPassword?.message}
            </div>
          </div>

          <div className="flex  gap-4">
            <label htmlFor="teacher">
              <input
                {...register("role", { required: true })}
                type="radio"
                name="role"
                value="teacher"
                className="form-check-input"
                id="teacher"
              />{" "}
              Teacher
            </label>

            <label htmlFor="student">
              <input
                {...register("role", { required: true })}
                type="radio"
                name="role"
                value="student"
                className="form-check-input"
                id="student"
              />{" "}
              Student
            </label>
          </div>
          <div className="my-2">
            <ToastContainer />
          </div>
          <div className="flex gap-5 justify-start">
            <input
              className="bg-lightindego w-[100px] text-slate-50 p-2 rounded cursor-pointer"
              type="submit"
            />
            <span className="w-[100px]">
              <input
                onClick={() => reset()}
                className="bg-lightindego w-[100%] text-slate-50 p-2 rounded cursor-pointer"
                type="Reset"
              />
            </span>
          </div>
        </form>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold text-indego">
            {" "}
            Loading{" "}
          </h1>
        </div>
      )}
    </div>
  );
}

export default StudentRegister;
