import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaBook, FaHome, FaList } from 'react-icons/fa';


const Dashboard = () => {

    const {user} = useAuth()
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-12">
                    <div className="lg:col-span-3 p-4 bg-gradient-to-r from-[#FF00001A] to-[#FF89381A] flex flex-col item-center h-full">
                        <ul className="menu">
                            {
                            user ? (<>
                                <li>
                                    <NavLink to='/dashboard/myHome'><FaHome></FaHome> My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'><FaBook></FaBook>My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/wishlist'><FaList></FaList>My Wishlist</NavLink>
                                </li>
                            </>) : null
                        }

                            {/* shared links */}
                            <div className="divider"></div>
                            <li>
                                <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-9 h-full p-4">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;