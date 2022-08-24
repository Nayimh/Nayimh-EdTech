import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import Image from '../../../assets/Image/Image';
import {TbMessageCircle} from 'react-icons/tb';
import { BiPhoneCall } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";

function Teacher() {
  const { state } = useLocation();
  
  return (
    <div className='container mx-auto'>
      <div className="flex justify-start mb-10 w-full h-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>
      <div>
        <h1 className="text-center text-2xl md:text-4xl text-indego font-bold mb-7 ">
          All Teachers
        </h1>
        <div className="flex justify-center flex-wrap gap-4 ">
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[250px] h-[300px] rounded-lg bg-indego ">
            <div className="p-4  flex justify-center w-full">
              <img
                className="w-28 h-28 rounded-full"
                src={Image?.teacher1}
                alt=""
              />
            </div>
            <div className="p-2 pt-0 flex flex-col items-center">
              <h1 className="text-xl text-slate-400 font-semibold">
                {" "}
                Robiul Islam{" "}
              </h1>
              <p className="-mt-1 text-xs text-slate-500 ">
                {" "}
                <em> (applied physics and electronics) </em>{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                Experience : 3 Years{" "}
              </p>
              <p className="mt-[4px] text-slate-400 font-medium">
                {" "}
                PHD in applied physics{" "}
              </p>
              <div className="mt-2 flex gap-4">
                <span className="w-8 h-8 hover:-mt-[2px] delay-200 ease-in rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <TbMessageCircle className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <BiPhoneCall className="text-2xl text-indego" />{" "}
                </span>
                <span className="w-8 h-8 hover:-mt-[2px] rounded-lg bg-lightindego flex justify-center items-center cursor-pointer shadow-xl">
                  {" "}
                  <FiShare2 className="text-2xl text-indego" />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher