import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import Image from '../../../assets/Image/Image';
import Calender from '../Calender';


function Dashboard() {

  const { state } = useLocation();
   
  return (
    <div className="container mx-auto">
      <div className="flex justify-start w-full h-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-5  ">
        <div className="w-[300px]  bg-lightindego rounded-lg flex flex-col py-5 gap-3 justify-center items-center">
          <img
            className="w-12 h-12 rounded-full"
            src={Image?.green}
            alt=""
          />
          <h1 className="text-xl font-semibold text-slate-200 ">
            {" "}
            Total Student{" "}
          </h1>
          <h1 className="text-lg font-medium   text-slate-200 ">
            {" "}
            841{" "}
          </h1>
        </div>
        <div className="w-[300px] py-5 bg-lightindego rounded-lg flex flex-col gap-3 justify-center items-center">
          <img
            className="w-12 h-12 rounded-full"
            src={Image?.blackman}
            alt=""
          />
          <h1 className="text-xl font-semibold text-slate-200 ">
            {" "}
            New Student{" "}
          </h1>
          <h1 className="text-lg font-medium   text-slate-200 ">
            {" "}
            210{" "}
          </h1>
        </div>
        <div className="w-[300px] py-5 bg-lightindego rounded-lg flex flex-col gap-3 justify-center items-center">
          <img
            className="w-12 h-12 rounded-full"
            src={Image?.green}
            alt=""
          />
          <h1 className="text-xl font-semibold text-slate-200 ">
            {" "}
            Total Teacher{" "}
          </h1>
          <h1 className="text-lg font-medium   text-slate-200 ">
            {" "}
            41{" "}
          </h1>
        </div>
      </div>
      <div className="my-20  w-[500px] h-[500px] mx-auto">
      <Calender/>
      </div>
    </div>
  );
};

export default Dashboard;