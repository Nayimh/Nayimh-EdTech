import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses, updateClass } from "../../../features/getAllClassSlice";
import { useEffect } from "react";
import { useState } from "react";


function Class() {


  const [allClass, setAllClass] = useState([]);

  const dispatch = useDispatch();

  const { classes, isLoading,  } = useSelector(
    (state) => state.classes
  );

  const studentClass = classes?.data?.studentClassRequest;

   useEffect(() => {
     setAllClass(studentClass);
   }, [studentClass]);


  useEffect(() => {
    dispatch(getAllClasses());
  }, [dispatch]);

 
  const { state } = useLocation();

  const handleUpdate = (id) => {

    dispatch(updateClass(id));

    console.log(id)

  }


  return (
    <div className="container mx-auto">
      <div className="flex justify-start mb-10 w-full h-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>
      <h1 className="my-8 text-2xl text-lightindego text-center font-bold">
        {" "}
        ALL Requested Class Total {allClass?.length}
      </h1>
      {
        isLoading &&  <h1 className='text-indego text-2xl text-center font-bold'> Loading ... </h1>
      }
      <div className="flex justify-center flex-wrap gap-8">
        {allClass?.map((myClass) => (
          
          <div
            key={myClass?._id}
            className="w-[290px]  bg-gray-100 hover:bg-gray-200 rounded border hover:border-indego shadow-xl relative"
          >
            <div className=" justify-center p-4">
              <div className="text-start">
                <h1 className="text-xl text-indego font-bold text-center">
                  {" "}
                  Subject : {myClass?.category}
                </h1>
                <p className="text-lg text-indego font-medium my-2">
                  {" "}
                  Title : {myClass?.title}
                </p>
                <div className="my-1 ">
                  <h1 className="font-medium text-indego">
                    {" "}
                    Level: {myClass.level}
                  </h1>
                  <p className="my-1 text-lightindego">
                    {myClass.description.slice(0, 100)}
                  </p>
                </div>
                <p className="flex justify-center gap-4 text-lg text-indego font-medium">
                  {" "}
                  <span>
                    Date: {myClass.date.slice(0, 10)}{" "}
                  </span> | <span> Time: {} </span>{" "}
                </p>
              </div>
              <div>
                <h4 className="">
                  {" "}
                  Status :{" "}
                  <span className="bg-[#c1c7fa] px-1 rounded-lg ">
                    {" "}
                    {myClass.status}{" "}
                  </span>
                </h4>
              </div>
              <div className="flex justify-around mt-3 items-center">
                {/* <span className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-gray-300">
                  {" "}
                  <AiOutlineClose className="text-2xl !text-red-600 font-bold" />{" "}
                </span> */}
                {myClass?.status === "pending" ? (
                  <span
                    onClick={() => handleUpdate(myClass?._id)}
                    className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-gray-300"
                  >
                    <h1 className="flex bg-indego items-center justify-center px-2 rounded text-gray-300 text-xl">
                      {" "}
                      Accep <TiTick className=" text-green-600" />
                    </h1>{" "}
                  </span>
                ) : (
                  <span
                    onClick={() => handleUpdate(myClass?._id)}
                    className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-gray-300"
                  >
                    <button  className="flex bg-lightindego disabled: items-center justify-center px-2 rounded text-gray-300 text-xl">
                      {" "}
                      Accepted 
                    </button>{" "}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Class