import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';
import Loading from '../../Shared/Loading/Loading';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {isLoading}=useContext(AuthContext);
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://usedproduct-market-serversite.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    if(isLoading){
        <Loading></Loading>
    }
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
                <ul className="menu p-4 w-80 mt-20  text-base-content">
                    {/* <li><Link to="/blog">Blogs</Link></li> */}
                     {
                        isAdmin && <>
                            <li><button className='btn  btn-warning m-5'><Link to="/dashboard/allsellers">All Seller</Link></button></li>
                            <li><button className='btn  btn-warning m-5 '><Link to="/dashboard/allbuyers">All Buyer</Link></button></li>
                            {/* <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li> */}
                        </>
                    } 
                     {
                        isSeller && <>
                            <li><button className='btn  btn-warning m-5'><Link to="/dashboard/addproduct">Add A Product</Link></button></li>
                            <li><button className='btn  btn-warning m-5'><Link to="/dashboard/myproduct">My Product</Link></button></li>
                            <li><button className='btn  btn-warning m-5'><Link to="/dashboard/mybuyers">My Buyers</Link></button></li>
                            {/* <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li> */}
                        </>
                    } 
                     {
                        isBuyer && <>
                            
                            <button className='btn  btn-warning m-5'><li><Link to="/dashboard/myorder">My Orders</Link></li></button>
                            <button className='btn  btn-warning m-5'><li><Link to="/dashboard/mywishlist">My WishList</Link></li></button>
                            
                            {/* <li><Link to="/dashboard/managedoctors">Manage Doctor</Link></li> */}
                        </>
                    } 
                    {/* <li><Link to="/dashboard/allusers">All users</Link></li>
                    */}
                    {/* {
                            users.map((user) =>
                                { 
                                user?.role == 'admin' && <>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/allBuyer">All Buyer</Link></li>
                                </>
                            })
                    } */}
                   

                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;