import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import TeacherProfile from "./EditTeacherProfile";

function StudentEditProfile() {
  const { state } = useLocation();

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
    image: Yup.string().required("Image Needed"),
    institute: Yup.string().required("Institute Name is Required"),
    level: Yup.string().required("Level is requireed")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const role = "teacher";

  return (
    <div className="container mx-auto mb-20">
      <div className="flex justify-start mb-10 w-full h-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        {role === "student" ? (
          <div>
            <h1 className="text-center my-5 text-xl md:text-2xl font-bold text-lightindego"> Students Edit Profile </h1>
            <form
              className="flex flex-col w-full md:w-[750px] mx-auto gap-6 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="image"
                    className="text-lightindego font-medium"
                  >
                    {" "}
                    Upload / Edit Image :
                  </label>
                  <input
                    name="image"
                    type="file"
                    alt="Submit"
                    {...register("image")}
                    className={`form-control  focus:outline-none w-full rounded`}
                  />

                  <div className="text-red-500">
                    {errors.image?.message}
                  </div>
                </div>
              </div>
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
                    name="name"
                    type="name"
                    {...register("name")}
                    className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                  />
                  <div className="text-red-500">
                    {errors.name?.message}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-[100%]">
                <div className="flex flex-col gap-2 w-[50%]">
                  <label
                    htmlFor="FullName"
                    className="text-lightindego font-medium"
                  >
                    {" "}
                    Level :
                  </label>
                  <input
                    placeholder="Class Level"
                    name="level"
                    type="text"
                    {...register("level")}
                    className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                  />
                  <div className="text-red-500">
                    {errors.level?.message}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-[50%] ">
                  <label
                    htmlFor="institute"
                    className="text-lightindego font-medium"
                  >
                    {" "}
                    Institute :
                  </label>
                  <input
                    placeholder="Institute Name"
                    name="institute"
                    type="text"
                    {...register("institute")}
                    className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                  />
                  <div className="text-red-500">
                    {errors.institute?.message}
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
                  name="email"
                  type="email"
                  {...register("email")}
                  className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
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
                  name="password"
                  type="password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  } focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
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
                  name="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  } focus:outline-none w-full h-8 p-4 bg-slate-200 rounded `}
                />
                <div className="text-red-500 ">
                  {errors.confirmPassword?.message}
                </div>
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
          </div>
        ) : (
          <TeacherProfile />
        )}
      </div>
    </div>
  );
}

export default StudentEditProfile;
