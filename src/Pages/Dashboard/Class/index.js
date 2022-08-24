import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { TiTick } from "react-icons/ti";


function Class() {

  const { state } = useLocation();

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
        ALL Requested Class Total 85
      </h1>
      <div className="flex justify-center flex-wrap gap-8">
        <div className="w-[290px]  bg-gray-100 hover:bg-gray-200 rounded border hover:border-indego shadow-xl">
          <div className=" justify-center p-4">
            <div className="text-start">
              <h1 className="text-xl text-indego font-bold text-center">
                {" "}
                Subject : Subject Name{" "}
              </h1>
              <p className="text-lg text-indego font-medium my-2">
                {" "}
                Topic : Topic Title{" "}
              </p>
              <div className="my-1 ">
                <h1 className="font-medium text-indego">
                  {" "}
                  Requested by: First Name{" "}
                </h1>{" "}
              <p className='text-xs  -mt-1 text-indego'> <em> Institute Name </em> </p>
                <h1 className="font-medium text-indego">
                  {" "}
                  Level: HSC{" "}
                </h1>
                <p className='my-1 text-lightindego'>
                Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a voluptatum quos rerum odit, dolor quidem! 
                </p>
              </div>
              <p className="flex justify-center gap-4 text-lg text-indego font-medium">
                {" "}
                <span>Date: 04/09/22</span> |{" "}
                <span> Time: 8 PM </span>{" "}
              </p>
            </div>
            <div className="flex justify-around mt-3 items-center">
              <span className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-gray-300">
                {" "}
                <AiOutlineClose className="text-2xl !text-red-600 font-bold" />{" "}
              </span>
              <span className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-gray-300">
                {" "}
                <TiTick className="text-3xl text-green-600" />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class