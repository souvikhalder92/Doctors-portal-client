import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../pages/hooks/useAdmin';
import Navbar from '../pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
   
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    
   
    return (
        <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                { /*bg-base-100*/ }
                <ul className="menu p-4 w-80 text-base-content">
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    {
                            isAdmin && <>
                            <li><Link to="/dashboard/allusers">All users</Link></li>
                            <li><Link to="/dashboard/adddoctor">Add Doctor</Link></li>
                            <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li>
                            </>
                    }

                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;