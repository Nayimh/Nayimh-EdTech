import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createClass } from '../../../features/getAllClassSlice';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";


function ClassRequest() {

  const [error, setError] = useState()


  const { state } = useLocation();

  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.classes,
  );  
  
  useEffect(() => {
    setError(isError &&
        toast.error( ` ${isError} ` , {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }))

  }, [isError])


  

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("Select a category"),
    level: Yup.string().required("Level is requireed"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Fix your convenient Time"),
    description: Yup.string().required("Description is Required"),
    title: Yup.string().required("Title is Required"),
    price: Yup.string().required("Set a fixed Price"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formOptions);

  const onSubmit = (data) => {

    dispatch(createClass(data))

   

    reset();
  };

 
        



  return (
    <div className="container mx-auto ">
      <ToastContainer />
      <div className="flex justify-start w-full h-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>
      <div></div>
      <div>
        <h1 className="text-center mt-10 mb-10 text-2xl font-bold text-slate-300 bg-lightindego w-[100%] md:w-[60%]  mx-auto  p-5 rounded-lg">
          Request For Class
        </h1>
        <div className="hidden">{isError && error}</div>
        
        <div className="">
          {
            isSuccess &&
       
              <h1 className="mb-4 text-indego font-bold text-center text-2xl">
                {" "}
                Successfully created!{" "}
              </h1>
          
           
            }
        </div>

        
        {!isLoading ? (
          <div className="w-full md:w-[700px] mx-auto">
            <form
              className="flex flex-col w-full gap-6 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-4">
                <div className="flex gap-3 w-full">
                  <div className="flex flex-col gap-2 w-[100%]">
                    <label
                      htmlFor="category"
                      className="text-indego font-medium"
                    >
                      {" "}
                      Category :
                    </label>
                    <select
                      id="category"
                      className={`form-control  focus:outline-none w-full h-8  text-indego bg-slate-200 rounded`}
                      {...register("category")}
                    >
                      <option
                        className="bg-indego  text-white"
                        value="Web Development"
                      >
                        Web Development
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Web Development"
                      >
                        Mobile Development
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Data Science"
                      >
                        Data Science
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Artificial Intelligence"
                      >
                        Artificial Intelligence
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Machine Learning"
                      >
                        Machine Learning
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Cloud Computing"
                      >
                        Cloud Computing
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Blockchain"
                      >
                        Blockchain
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Cryptocurrency"
                      >
                        Cryptocurrency
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="DevOps"
                      >
                        DevOps
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Game Development'"
                      >
                        Game Development'
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Hardware"
                      >
                        Hardware
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Networking"
                      >
                        Networking
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Programming"
                      >
                        Programming
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Software"
                      >
                        Software
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Virtualization"
                      >
                        Virtualization
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Web Design"
                      >
                        Web Design
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="UI/UX Design"
                      >
                        UI/UX Design
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Big Data"
                      >
                        Big Data
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Other"
                      >
                        Other
                      </option>
                    </select>
                    <div className="text-red-500">
                      {errors.category?.message}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-[100%]">
                    <label
                      htmlFor="level"
                      className="text-indego font-medium"
                    >
                      {" "}
                      Level :
                    </label>
                    <select
                      id="level"
                      className={`form-control  focus:outline-none w-full h-8  text-indego bg-slate-200 rounded`}
                      {...register("level")}
                    >
                      <option
                        className="bg-indego  text-white"
                        value="Beginner"
                      >
                        Beginner
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Upper Beginner"
                      >
                        Upper Beginner
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Intermediate"
                      >
                        Intermediate
                      </option>
                      <option
                        className="bg-indego  text-white"
                        value="Advanced"
                      >
                        Advanced
                      </option>
                    </select>
                    <div className="text-red-500">
                      {errors.level?.message}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor="price"
                  className="text-indego font-medium"
                >
                  {" "}
                  Price :
                </label>
                <input
                  placeholder="price"
                  name="price"
                  type="number"
                  {...register("price")}
                  className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                />
                <div className="text-red-500">
                  {errors.price?.message}
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor="title"
                  className="text-indego font-medium"
                >
                  {" "}
                  Title :
                </label>
                <input
                  placeholder="Subject Title"
                  name="title"
                  type="text"
                  {...register("title")}
                  className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                />
                <div className="text-red-500">
                  {errors.title?.message}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-3 w-full">
                  <div className="flex flex-col gap-2 w-[100%]">
                    <label
                      htmlFor="FullName"
                      className="text-indego font-medium"
                    >
                      {" "}
                      Date :
                    </label>
                    <input
                      name="date"
                      type="date"
                      {...register("date")}
                      className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                      placeholder="Subject Name"
                    />
                    <div className="text-red-500">
                      {errors.date?.message}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-[100%]">
                    <label
                      htmlFor="time"
                      className="text-indego font-medium"
                    >
                      {" "}
                      Time :
                    </label>
                    <input
                      placeholder="Class Level"
                      name="time"
                      type="time"
                      {...register("time")}
                      className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                    />
                    <div className="text-red-500">
                      {errors.time?.message}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <label
                  htmlFor="description"
                  className="text-indego font-medium"
                >
                  {" "}
                  Description :
                </label>
                <textarea
                  placeholder="Subject Title"
                  name="description"
                  type="text"
                  rows="6"
                  {...register("description")}
                  className={`form-control  focus:outline-none w-full  p-4 bg-slate-200 rounded`}
                />
                <div className="text-red-500">
                  {errors.description?.message}
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
          <div>
            <h1 className="text-2xl text-center font-bold text-indego">
              {" "}
              Loading...{" "}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassRequest;
