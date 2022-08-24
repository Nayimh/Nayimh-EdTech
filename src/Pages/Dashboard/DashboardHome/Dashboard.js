
import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Image from '../../../assets/Image/Image';
import Header from '../Header';



function DashboardHome() {
  const [open, setOpen] = useState(true);
  const [link, setLink] = useState("dashboard");

  return (
    <div className="flex ">
      <div>
        <div>
          <div
            className={` ${
              open ? "w-72" : "w-20 "
            } bg-indego h-screen p-5  pt-8 z-50 absolute md:relative duration-300  `}
          >
            <img
              src={Image.control}
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-lightindego
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
              alt="imgs"
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={Image.logo}
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
                alt="f"
              />
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
                state="Dashboard"
                onClick={() => setLink("dashboard")}
                className={`${
                  link === "dashboard" && "bg-lightindego"
                } block rounded-[6px]`}
                to=""
              >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 } 
           `}
                >
                  <img src={Image.chart} alt="chart" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-semibold`}
                  >
                    Home
                  </span>
                </li>
              </Link>
              <Link
                state="create request"
                to="classrequest"
                onClick={() => setLink("student")}
                className={`${
                  link === "student" && "bg-lightindego"
                } block rounded-[6px]`}
              >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 } 
           `}
                >
                  <img src={Image.folder} alt="chart" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-semibold`}
                  >
                    Class Request
                  </span>
                </li>
              </Link>
              <Link
                state="Comment"
                to="comment"
                onClick={() => setLink("comment")}
                className={`${
                  link === "comment" && "bg-lightindego"
                } block rounded-[6px]`}
              >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 } 
           `}
                >
                  <img src={Image.folder} alt="chart" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-semibold`}
                  >
                    Comment
                  </span>
                </li>
              </Link>
              <Link
                state="Teachers"
                to="teacher"
                onClick={() => setLink("teacher")}
                className={`${
                  link === "teacher" && "bg-lightindego"
                } block rounded-[6px]`}
              >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2  
           `}
                >
                  <img src={Image.user} alt="chart" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-semibold`}
                  >
                    Teacher
                  </span>
                </li>
              </Link>
              <Link
                state="Requested Class"
                to="class"
                onClick={() => setLink("class")}
                className={`${
                  link === "class" && "bg-lightindego"
                } block rounded-[6px]`}
              >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 
           `}
                >
                  <img src={Image.user} alt="chart" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-semibold`}
                  >
                    Requested Class
                  </span>
                </li>
              </Link>
              <Link
                state="Scedule"
                to="scedule"
                onClick={() => setLink("scedule")}
                className={`${
                  link === "scedule" && "bg-lightindego"
                } block rounded-[6px]`}
              >
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-txtclr text-gray-300 text-sm items-center gap-x-4  mt-2 
           `}
                >
                  <img src={Image.calender} alt="chart" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-lg font-semibold`}
                  >
                    Scedule
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-screen overflow-y-scroll flex-1 bg-[#f6f6f6]">
        <Header />
        <div
          style={{ height: "85vh" }}
          className=" overflow-y-scroll p-4 pt-0 md:pt-0 md:p-1 md:pl-0  ml-16 ssm:ml-14 md:ml-0"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome