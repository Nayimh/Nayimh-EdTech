import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


function StudentEditProfile() {

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
          .oneOf([Yup.ref('password')], 'Passwords must match'),
        email: Yup.string()
          .required("Email is required"),
        name: Yup.string()
          .required("Full Name is required")
            .min(4, "Name must be longer then 4 characters"),
        image: Yup.string()
            .required("Image Needed")

    
    
        
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    
    
        const { register, handleSubmit, formState: { errors }, reset } = useForm(
          formOptions
      );
    
      const onSubmit = (data) => {
       
        console.log(data);
        reset()  
      }

  return (
      <div className='container mx-auto'>
          <div className='flex flex-col justify-center'>
              
              <span>
                  
          </span>
    <form
    className="flex flex-col w-full md:w-[750px] mx-auto gap-6 "
    onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex gap-4">
                
           
    <div className="flex flex-col gap-2 ">
      <label
        htmlFor="image"
        className="text-lightindego font-medium"
      >
        {" "}
         Upload / Edit Image  :
      </label>
      <input name="image" type="file" {...register('image')} className={`form-control  focus:outline-none w-full  rounded`} />
                      <div className="text-red-500">{errors.image?.message}</div>

                </div>

                
  
            </div>
            <div className="flex gap-4">
                
           
    <div className="flex flex-col gap-2 w-[100%]">
      <label
        htmlFor="FullName"
        className="text-lightindego font-medium"
      >
        {" "}
         Name :
      </label>
      <input name="name" type="name" {...register('name')} className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                      <div className="text-red-500">{errors.name?.message}</div>

                </div>

                
  
            </div>
            
            <div className="flex flex-col gap-2 ">
      <label
        htmlFor="email"
        className="text-lightindego font-medium"
      >
        {" "}
        Email :
    </label>
    <input name="email" type="email" {...register('email')} className={`form-control  focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                      <div className="text-red-500">{errors.email?.message}</div>
               

    </div>
  
  <div className="flex flex-col gap-2 ">
    
    <label
    className="text-lightindego font-medium"
    >Password</label>
                      <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded`} />
                      <div className="text-red-500">{errors.password?.message}</div>
      
            </div>
  <div className="flex flex-col gap-2 ">
    <label
    className="text-lightindego font-medium"
    >Confirm Password</label>
    <input
      
      name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''} focus:outline-none w-full h-8 p-4 bg-slate-100 rounded `} />
                      <div className="text-red-500 ">{errors.confirmPassword?.message}</div>
    
                
            </div>
          
  <div className="flex  gap-4">

  <label htmlFor="Teacher">
      <input
        {...register('role', { required: true })}
        type="radio"
        name="role"
        value="Teacher"
        className="form-check-input"
        id="pizza"
      />{' '}
      Teacher
    </label>

    <label htmlFor="student">
      <input
        {...register('role', { required: true })}
        type="radio"
        name="role"
        value="Student"
        className="form-check-input"
        id="burger"
      />{' '}
      Student
    </label>
  

  </div>
          
        <div className='flex gap-5 justify-start'>
    <input
      className="bg-lightindego w-[100px] text-slate-50 p-2 rounded cursor-pointer"
      type="submit"
      />
      <span className='w-[100px]'>
          <input
           
            onClick={()=> reset()}
      className="bg-lightindego w-[100%] text-slate-50 p-2 rounded cursor-pointer"
      type="Reset" 
      />

        </span>
        </div>
              </form>
              </div>
</div>
  )
}

export default StudentEditProfile;