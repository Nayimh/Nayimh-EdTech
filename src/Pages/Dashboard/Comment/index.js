import React, { useState } from 'react'
import {
  AiFillHome,
  AiFillLike,
  AiOutlineLike,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import * as Yup from "yup";
import Image from '../../../assets/Image/Image';

function Comment() {
    const { state } = useLocation();
    const [comments, setComment] = useState([]);
    const [like, setLike] = useState(false);

    const validationSchema = Yup.object().shape({
      comment: Yup.string()
        .required("Comment is required")
        .min(10)
        .max(250),
      name: Yup.string()
        .required("Name is required")
        .min(4)
        .max(250),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const {
      register,
        handleSubmit,
      reset,
      formState: { errors },
      
    } = useForm(formOptions);
    const onSubmit = (data) => {
       
        setComment([...comments, data])
        
        reset()
    };

    

  return (
    <div className="container mx-auto">
      <div className="flex justify-start w-full h-10 my-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>
      <div className=" flex justify-center  w-full md:w-[700px] mx-auto bg-white ">
        <form
          className="flex flex-col w-full p-5 gap-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-2 w-[100%] ">
              <label
                htmlFor="name"
                className="text-lightindego font-medium"
              >
                {" "}
                Name :
              </label>
              <input
                placeholder="User Name"
                name="name"
                type="text"
                {...register("name")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                } focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
              />
              <div className="text-red-500">
                {errors.name?.message}
              </div>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-2 w-[100%] ">
              <label
                htmlFor="name"
                className="text-lightindego font-medium"
              >
                {" "}
                File :
              </label>
              <input
               
                name="file"
                type="file"
                {...register("name")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                } focus:outline-none `}
              />
              <div className="text-red-500">
                {errors.name?.message}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-[100%]">
              <label
                htmlFor="comment"
                className="text-lightindego font-medium"
              >
                {" "}
                Comment :
              </label>
              <textarea
                placeholder="Comment"
                name="comment"
                type="text"
                {...register("comment")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                } focus:outline-none w-full  p-4 bg-slate-200 rounded`}
              />
              <div className="text-red-500">
                {errors.comment?.message}
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-start">
            <input
              className="bg-lightindego w-[100px] text-slate-50 p-2 rounded cursor-pointer"
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>
      {/* display Comment */}

      <div className="w-full md:w-[700px] p-4  mx-auto my-20">
        {comments?.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start p-4
                      w-full bg-white rounded mb-4
                      "
          >
            <div className=" flex gap-4">
              <span>
                {" "}
                <img
                  src={Image?.green}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />{" "}
              </span>
              <div className="flex flex-col gap-1 ">
                <h1 className="text-indego  font-bold text-xl ">
                  {" "}
                  {comment?.name}{" "}
                </h1>
                <p> {comment?.date} </p>
              </div>
            </div>
            <p className="text-indego text-base font-medium ml-14">
              {" "}
              {comment?.comment}{" "}
            </p>
            <div className="flex gap-5 my-2 ml-14 ">
                    { like ? 
                        <span>
                            <p> {like} </p>
                <AiFillLike
                  className="text-2xl  text-indego cursor-pointer "
                  onClick={() => setLike(false)}
                />
              </span>
:
              <span>
                <AiOutlineLike
                  className="text-2xl  text-indego cursor-pointer "
                  onClick={() => setLike(true)}
                />
              </span>
                    }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;