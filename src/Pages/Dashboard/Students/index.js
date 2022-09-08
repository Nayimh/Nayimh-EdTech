import React from "react";
import { useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function ClassRequest() {
  const { state } = useLocation();

  const validationSchema = Yup.object().shape({
    subject: Yup.string()
      .required("Subject Name is required")
      .min(3, " Subject Name must be longer then 3 characters"),
    level: Yup.string().required("Level is requireed"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Fix your convenient Time"),
    desc: Yup.string().required("Description is Required"),
    title: Yup.string().required("Title is Required"),
    institute: Yup.string().required("Institute Name is Required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-start w-full h-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>
      <div>
        <h1 className="text-center mt-10 mb-10 text-2xl font-bold text-slate-300 bg-lightindego w-[100%] md:w-[60%]  mx-auto  p-5 rounded-lg">
          Request For Class
        </h1>
        <div className="w-full md:w-[700px] mx-auto">
          <form
            className="flex flex-col w-full gap-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-4">
              <div className="flex gap-3 w-full">
                <div className="flex flex-col gap-2 w-[100%]">
                  <label
                    htmlFor="FullName"
                    className="text-lightindego font-medium"
                  >
                    {" "}
                    Subject Name :
                  </label>
                  <input
                    name="name"
                    type="text"
                    {...register("subject")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    } focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                    placeholder="Subject Name"
                  />
                  <div className="text-red-500">
                    {errors.subject?.message}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-[100%]">
                  <label
                    htmlFor="FullName"
                    className="text-lightindego font-medium"
                  >
                    {" "}
                    Level :
                  </label>
                  <input
                    placeholder="Class Level"
                    name="level"
                    type="text"
                    {...register("level")}
                    className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
                  />
                  <div className="text-red-500">
                    {errors.level?.message}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="institute"
                className="text-lightindego font-medium"
              >
                {" "}
                Institute :
              </label>
              <input
                placeholder="Institute Name"
                name="institute"
                type="text"
                {...register("institute")}
                className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
              />
              <div className="text-red-500">
                {errors.institute?.message}
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="title"
                className="text-lightindego font-medium"
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
                    className="text-lightindego font-medium"
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
                    className="text-lightindego font-medium"
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
                htmlFor="email"
                className="text-lightindego font-medium"
              >
                {" "}
                Description :
              </label>
              <textarea
                placeholder="Subject Title"
                name="desc"
                type="text"
                rows="6"
                {...register("desc")}
                className={`form-control  focus:outline-none w-full  p-4 bg-slate-200 rounded`}
              />
              <div className="text-red-500">
                {errors.desc?.message}
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
      </div>
    </div>
  );
}

export default ClassRequest;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import { AiFillHome } from "react-icons/ai";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// function ClassRequest() {
//   const { state } = useLocation();

//   const validationSchema = Yup.object().shape({
//     subject: Yup.string()
//       .required("Subject Name is required")
//       .min(3, " Subject Name must be longer then 3 characters"),
//     level: Yup.string().required("Level is requireed"),
//     date: Yup.string().required("Date is required"),
//     time: Yup.string().required("Fix your convenient Time"),
//     desc: Yup.string().required("Description is Required"),
//     title: Yup.string().required("Title is Required"),
//     institute: Yup.string().required("Institute Name is Required"),
//   });
//   const formOptions = { resolver: yupResolver(validationSchema) };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm(formOptions);

//   const onSubmit = (data) => {
//     console.dir(data);
//     // reset();
//     console.log("asdfasdf");
//   };
// console.log("asdfasdf")
//   return (
//     <div className="container mx-auto ">
//       <div className="flex justify-start w-full h-10 bg-lightindego items-center ">
//         <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
//           {" "}
//           <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
//         </h1>
//       </div>
//       <div>
//         <h1 className="text-center mt-10 mb-10 text-2xl font-bold text-slate-300 bg-lightindego w-[100%] md:w-[60%]  mx-auto  p-5 rounded-lg">
//           Request For Class
//         </h1>
//         <div className="w-full md:w-[700px] mx-auto">
//           <form
//             className="flex flex-col w-full gap-6 "
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <div className="flex gap-4">
//               <div className="flex gap-3 w-full">
//                 <div className="flex flex-col gap-2 w-[100%]">
//                   <label
//                     htmlFor="subjectName"
//                     className="text-lightindego font-medium"
//                   >
//                     {" "}
//                     Subject Name :
//                   </label>
//                   <input
//                     name="subjectName"
//                     type="text"
//                     {...register("subject")}
//                     className={`form-control ${
//                       errors.password ? "is-invalid" : ""
//                     } focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
//                     placeholder="Subject Name"
//                   />
//                   <div className="text-red-500">
//                     {errors.subject?.message}
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 w-[100%]">
//                   <label
//                     htmlFor="level"
//                     className="text-lightindego font-medium"
//                   >
//                     {" "}
//                     Level :
//                   </label>
//                   <input
//                     placeholder="Class Level"
//                     name="level"
//                     type="text"
//                     {...register("level")}
//                     className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
//                   />
//                   <div className="text-red-500">
//                     {errors.level?.message}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2 ">
//               <label
//                 htmlFor="institute"
//                 className="text-lightindego font-medium"
//               >
//                 {" "}
//                 Institute :
//               </label>
//               <input
//                 placeholder="Institute Name"
//                 name="institute"
//                 type="text"
//                 {...register("institute")}
//                 className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
//               />
//               <div className="text-red-500">
//                 {errors.institute?.message}
//               </div>
//             </div>
//             <div className="flex flex-col gap-2 ">
//               <label
//                 htmlFor="title"
//                 className="text-lightindego font-medium"
//               >
//                 {" "}
//                 Title :
//               </label>
//               <input
//                 placeholder="Subject Title"
//                 name="title"
//                 type="text"
//                 {...register("title")}
//                 className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
//               />
//               <div className="text-red-500">
//                 {errors.title?.message}
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <div className="flex gap-3 w-full">
//                 <div className="flex flex-col gap-2 w-[100%]">
//                   <label
//                     htmlFor="date"
//                     className="text-lightindego font-medium"
//                   >
//                     {" "}
//                     Date :
//                   </label>
//                   <input
//                     name="date"
//                     type="date"
//                     {...register("date")}
//                     className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
//                     placeholder="Subject Name"
//                   />
//                   <div className="text-red-500">
//                     {errors.date?.message}
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 w-[100%]">
//                   <label
//                     htmlFor="time"
//                     className="text-lightindego font-medium"
//                   >
//                     {" "}
//                     Time :
//                   </label>
//                   <input
//                     placeholder="Class Level"
//                     name="time"
//                     type="time"
//                     {...register("time")}
//                     className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-200 rounded`}
//                   />
//                   <div className="text-red-500">
//                     {errors.time?.message}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 ">
//               <label
//                 htmlFor="desc"
//                 className="text-lightindego font-medium"
//               >
//                 {" "}
//                 Description :
//               </label>
//               <textarea
//                 placeholder="Subject Title"
//                 name="desc"
//                 type="text"
//                 rows="6"
//                 {...register("desc")}
//                 className={`form-control  focus:outline-none w-full  p-4 bg-slate-200 rounded`}
//               />
//               <div className="text-red-500">
//                 {errors.desc?.message}
//               </div>
//             </div>

//             <div className="flex gap-5 justify-start">
//               <input
//                 className="bg-lightindego w-[100px] text-slate-50 p-2 rounded cursor-pointer"
//                 type="submit"
//               />
//               <span className="w-[100px]">
//                 <input
//                   onClick={() => reset()}
//                   className="bg-lightindego w-[100%] text-slate-50 p-2 rounded cursor-pointer"
//                   type="Reset"
//                 />
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClassRequest;
