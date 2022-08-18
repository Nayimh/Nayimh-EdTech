import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
      <div className='container mx-auto'>
          <div className='grid justify-center items-center h-[100vh]'>
              <div className='flex flex-col justify-center items-center'>
              <h1 className='text-indego text-2xl'> Page Not Found | 404 Error </h1>
                  
             <Link to='/'> <button className='mt-8 bg-lightindego py-3 w-24 rounded text-slate-50 hover:shadow-xl hover:bg-indego'>
                  Go Home
              </button> </Link>
              </div>

          </div>
      </div>
  )
}

export default NotFound