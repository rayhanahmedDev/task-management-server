
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero lg:min-h-[640px] min-h-[400px] bg-base-200 bg-image">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold text-[#050748] leading-tight">Simplify Your Life With Task <span className='text-[#E60072]'>Management</span></h1>
                        <p className="py-6 text-[#050748]">Automate Your Daily Tasks. Focus One Things That Really Matter</p>
                        <Link to='/login'><button className="btn bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] text-white">Let’s Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;