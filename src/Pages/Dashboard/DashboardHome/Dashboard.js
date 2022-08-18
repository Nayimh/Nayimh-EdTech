
import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Image from '../../../assets/Image/Image';



function DashboardHome() {
  const [open, setOpen] = useState(true);
  const [link, setLink] = useState("dashboard");

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-indego h-screen p-5  pt-8 absolute duration-300  `}
      >
        <img
          src={Image.control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-lightindego
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} alt="imgs"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Image.logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          alt="f" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <p>Education</p>
            
          </h1>
        </div>
        <ul className="pt-10">
          <Link
            onClick={() => setLink("dashboard")}
            className={`${link === "dashboard" && "bg-lightindego"} block rounded-[6px]`}
            to="">
          <li
         
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 } 
           `}
          >
            
            <img src={Image.chart} alt="chart" />
            <span className={`${!open && "hidden"} origin-left duration-200 text-lg font-semibold`}>

              Dashboard
            </span>
            
            </li>
            </Link>
          <Link to="student"
           onClick={() => setLink("student")}
           className={`${link === "student" && "bg-lightindego"} block rounded-[6px]`}
          >
          <li
         
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 } 
           `}
          >
            
            <img src={Image.chart} alt="chart" />
            <span className={`${!open && "hidden"} origin-left duration-200 text-lg font-semibold`}>


                Student
</span>
            
            </li>
          </Link>
          <Link to="teacher"
           onClick={() => setLink("teacher")}
           className={`${link === "teacher" && "bg-lightindego"} block rounded-[6px]`}
          >
          <li
        
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2  
           `}
          >
            <img src={Image.chart} alt="chart" />
            <span className={`${!open && "hidden"} origin-left duration-200 text-lg font-semibold`}>

              Teacher
            </span>
            </li>
          </Link>
          <Link to="class"
           onClick={() => setLink("class")}
           className={`${link === "class" && "bg-lightindego"} block rounded-[6px]`}
          >
          <li
          
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 
           `}
          >
            <img src={Image.chart} alt="chart" />
            <span className={`${!open && "hidden"} origin-left duration-200 text-lg font-semibold`}>

              Class
            </span>
            </li>
          </Link>
          <Link to="scedule"
           onClick={() => setLink("scedule")}
           className={`${link === "scedule" && "bg-lightindego"} block rounded-[6px]`}
          >
          <li
          
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 
           `}
          >
            <img src={Image.chart} alt="chart" />
            <span className={`${!open && "hidden"} origin-left duration-200 text-lg font-semibold`}>

              Scedule
            </span>
            </li>
            </Link>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 ml-[55px]">
              <h1 className="text-2xl font-semibold ">
                  <Outlet/>
              </h1>
      </div>
    </div>
  )
}

export default DashboardHome