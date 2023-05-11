/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          });
    
    }, [])
    

    return (
      <div className="my-8">
        <h2 className=" mb-4 text-2xl font-bold text-center text-orange-600">
          Service
        </h2>
        <h2 className=" mb-4 text-5xl font-bold text-center text-black">
          Our service area
        </h2>
        <div className="w-full flex justify-center mb-4 ">
          <div className="text-center w-full md:w-3/4 lg:w-1/2">
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </div>
        </div>
        {/* services  */}
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {services.map(service => <ServiceCard service={service} key={service._id} />)}
            </ul>
        </div>
      </div>
    );
};

export default Services;