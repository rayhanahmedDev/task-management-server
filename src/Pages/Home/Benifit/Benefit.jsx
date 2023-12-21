import { useEffect, useState } from "react";
import './Benefit.css'

const Benefit = () => {

    const [benefits, setBenefit] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBenefit(data))
    },[])
    return (
        <div className="md:px-36 lg:py-20 py-12 bg-color">
            <h2 className="text-4xl font-bold text-center text-[#050748]"><span className="text-[#E60072]">Who </span>Can Benefits ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {
                    benefits.map(benefit => <div key={benefit.id} className="client-style mx-8 lg:mx-0 bg-[#D6EDFF] text-[#050748]" style={{background: benefit.color,}}>
                    <div className="px-10 pt-10">
                      <p className="text-7xl text-center">{benefit.icon}</p>
                    </div>
                    <div className="card-body items-center text-center">
                      <h2 className="text-[22px] font-semibold">{benefit.title}</h2>
                      <p>{benefit.description}</p>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Benefit;