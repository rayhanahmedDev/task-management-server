import { NavLink } from "react-router-dom";


const NavBer = () => {
    const links = <>
        <li><NavLink className="mr-4 " to="/">Home</NavLink></li>
        <li><NavLink className="mr-4" to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink className="mr-4" to='/logout'>LogOut</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar shadow md:px-36 py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-[#050748] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-[#c7ecff] rounded-box w-52 text-[#050748]">
                            {links}
                        </ul>
                    </div>
                    <h2 className="text-3xl font-bold"><span className="text-[#050748]">Task Management</span></h2>
                </div>
                <div className="navbar-end">
                    <nav className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1 text-[#050748]">
                            {links}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBer;