import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,  useLocation } from 'react-router-dom';
import DashboardHome from '../Dashboard/DashboardHome/Dashboard';



function PrivateRoute() {

    const { user, isLoading } = useSelector((state) => state.auth);

    let location = useLocation();

    

    if (isLoading) {
       return <div>
        <h1 className='text-center font-bold text-indego text-xl'> Loading... </h1>
    </div>
    } 

    if (user?.auth?.email) {
        return <DashboardHome/>
    }

    return <Navigate to="/login" state={{from: location}} replace/>
    
}

export default PrivateRoute