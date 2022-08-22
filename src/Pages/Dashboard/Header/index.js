import React, { useState } from "react";
import { BsBellFill, BsMessenger } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import {
  AiOutlineClose,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import Image from "../../../assets/Image/Image";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  const [notificaton, setNotification] = useState(false);

  return (
    <div className=" mx-auto mb-7 p-0  ">
      <div className="w-[100%] h-24 bg-indego">
        <div className="flex px-5 justify-between items-center h-[100%]">
          <h1 className="ml-20 md:ml-0 text-xl md:text-2xl text-white font-bold">
            {" "}
            Dashboard{" "}
          </h1>
          <div className="flex items-center   gap-3">
            <div className={`   relative transition-transform `}>
              <span
                onClick={() => setNotification(true)}
                className="w-10 h-10 bg-white  rounded-full flex justify-center items-center cursor-pointer"
              >
                <BsBellFill className="text-indego text-2xl" />
              </span>
              <div
                className={` ${
                  notificaton ? " block " : "hidden opacity-0"
                } absolute w-60  bg-indego -ml-48 mt-2 rounded p-4  transition delay-300`}
              >
                <div className="flex justify-end">
                  <p
                    className="w-7 h-7 rounded-full bg-txtclr flex justify-center mb-2 items-center"
                    onClick={() => setNotification(false)}
                  >
                    {" "}
                    <AiOutlineClose className="text-lg text-white font-bold cursor-pointer  " />{" "}
                  </p>
                </div>
                <div className="flex items-center justify-between text-slate-300 text-base   relative">
                  <p className="cursor-pointer"> Notification </p>
                  <p className="cursor-pointer"> Clear All </p>
                </div>

                <div className="mt-5">
                  <div className="flex justify-end"></div>
                  <div className=" flex gap-3 items-center justify-start text-slate-400 text-lg cursor-pointer hover:text-slate-300 mb-5">
                    <span className="text-green-600">
                      {" "}
                      <TiTick className="text-3xl" />{" "}
                    </span>{" "}
                    Your Request is Accepted
                  </div>

                  <div className=" flex gap-3 items-center justify-start text-slate-400 text-lg cursor-pointer hover:text-slate-300 mb-5">
                    <span>
                      {" "}
                      <BsMessenger className="w-7 text-2xl" />{" "}
                    </span>{" "}
                    Group message
                  </div>
                  <div className=" flex gap-3 items-center justify-start text-slate-400 text-lg cursor-pointer hover:text-slate-300">
                    <span>
                      {" "}
                      <img src={Image?.blackman} alt="" />{" "}
                    </span>{" "}
                    New Member
                  </div>
                </div>
              </div>
            </div>
            <div className={`   relative transition-transform `}>
              <span
                onClick={() => setActive(true)}
                className="w-14 h-14 bg-white  rounded-full flex justify-center items-center cursor-pointer"
              >
                {/* <CgProfile className="text-indego text-2xl" /> */}
                <img
                  className="w-full h-full rounded-full"
                  src={Image?.green}
                  alt=""
                />
              </span>
              <div
                className={` ${
                  active ? " block " : "hidden opacity-0"
                } absolute w-60  bg-indego -ml-48 mt-2 rounded p-4  transform:delay-1000 ease-in`}
              >
                <div className="flex items-center justify-end  relative">
                  <span
                    className="w-7 h-7 rounded-full bg-lightindego flex justify-center mb-2 items-center"
                    onClick={() => setActive(false)}
                  >
                    {" "}
                    <AiOutlineClose className="text-lg text-white font-bold cursor-pointer  " />{" "}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center mb-2  border-b border-sky-100 p-2 rounded ">
                  <img
                    src={Image?.green}
                    alt=""
                    className="mb-1 h-14 w-14 rounded-full"
                  />
                  <h3 className="text-light-white font-semibold text-xl ">
                    {" "}
                    Name{" "}
                  </h3>
                  <p className="text-slate-300 "> Student </p>
                </div>
                <div>
                  <Link state="Edit Profile" to="./editProdile">
                    <div className=" flex gap-3 items-center justify-start text-slate-400 text-lg cursor-pointer hover:text-slate-300 mb-5">
                      <span>
                        {" "}
                        <CgProfile />{" "}
                      </span>{" "}
                      Edit Profile
                    </div>
                  </Link>
                  <div className=" flex gap-3 items-center justify-start text-slate-400 text-lg cursor-pointer hover:text-slate-300 mb-5">
                    <span>
                      {" "}
                      <AiFillSetting />{" "}
                    </span>{" "}
                    Settings
                  </div>
                  <div className=" flex gap-3 items-center justify-start text-slate-400 text-lg cursor-pointer hover:text-slate-300">
                    <span>
                      {" "}
                      <AiOutlineLogout />{" "}
                    </span>{" "}
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
