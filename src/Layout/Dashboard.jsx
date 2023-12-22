import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaBook, FaHome, } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import NavBer from "../Pages/Shared/NavBer/NavBer";

const Dashboard = () => {

    const { user } = useAuth()
    return (
        <div>
            <div className="bg-gradient-to-r from-[#ffdee9] to-[#c8fff4] lg:h-[100px]">
            <NavBer></NavBer>
            </div>
            <div className="lg:pl-8 lg:pr-8 bg-[#FFFFFF]">
                <div className="grid grid-cols-1 lg:grid-cols-12 pt-20 gap-5">
                    <div className="lg:col-span-3 p-4 bg-[#ffe2e2] flex flex-col item-center h-full mx-4">
                        <ul className="menu">
                            {
                                user ? (<>
                                    <li>
                                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myProfile'><CgProfile></CgProfile> My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/createTask'><FaBook></FaBook>Create Task</NavLink>
                                    </li>
                                </>) : null
                            }
                        </ul>
                    </div>
                    <div className="lg:col-span-9 h-full px-4">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;