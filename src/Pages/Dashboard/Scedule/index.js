import React from "react";
import Image from "../../../assets/Image/Image";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function Scedule() {
  const { state } = useLocation();

  return (
    <div className="container mx-auto">
      <div className="flex justify-start w-full h-10 my-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>

      <div className="my-10">
        <h1 className="mb-10 text-center font-bold text-indego text-xl md:text-3xl ">
          All Sceduled Class
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px]  bg-white shadow-md hover:shadow-xl relative p-3 rounded">
            <div className="text-left ">
              <p className="my-1 font-semibold text-lg text-indego">
                {" "}
                Subject Name : lorem{" "}
              </p>
              <p className="font-semibold text-indego ">
                {" "}
                Class Title : Lorem ipsum dolor sit amet.{" "}
              </p>
              <div className="flex justify-between items-center  my-4">
                <span>
                  <h1 className="text-indego font-semibold text-lg">
                    {" "}
                    Robiul Islam{" "}
                  </h1>
                  <p className="-mt-1 text-xs ">
                    {" "}
                    <em className="text-indego">
                      {" "}
                      PHD in applied physics{" "}
                    </em>{" "}
                  </p>
                </span>
                <span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Image?.beard}
                    alt=""
                  />
                </span>
                <span>
                  <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                    Details
                  </button>
                </span>
              </div>
              <div className="text-left ">
                <h1 className="bg-gray-100 text-md text-lightindego ">
                  {" "}
                  Total Students in this class : 44{" "}
                </h1>
              </div>
              <div className="mt-5 flex justify-center gap-10">
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Share{" "}
                </button>
                <button className="text-sm font-medium py-1 px-3 bg-lightindego rounded-[2px] text-slate-400  hover:bg-indego ">
                  {" "}
                  Join{" "}
                </button>
              </div>
              <div className="absolute top-[2px] right-[2px] w-24  rounded-[2px] shadow-sm bg-lightindego p-[2px]">
                <p className="text-xs text-slate-300">
                  {" "}
                  Date: 08/08/22{" "}
                </p>
                <p className="text-xs text-slate-300">
                  {" "}
                  Time: 08 PM{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scedule;
