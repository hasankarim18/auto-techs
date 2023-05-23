/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { baseServerUrl } from "../../../utils/url";


const Services = () => {
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)
    const [isSorting, setIsSorting] = useState(true)
    const [searchTExt, setSearchTExt] = useState('')
    const serarchRef = useRef(null)    

    useEffect(() => {
      setIsSorting(true);
      fetch(
        `${baseServerUrl}/services?search=${searchTExt}&sort=${
          asc ? "asc" : "desc"
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsSorting(false);
          setServices(data);
        })
        .catch(() => {
          setIsSorting(false);
        });
    }, [asc, searchTExt]);

    const handleSearch = () => {
      console.log(serarchRef.current.value);
      setSearchTExt(serarchRef.current.value)
    };
    

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
            <div className="mt-8">
              <div className="form-control">
                <div className="input-group">
                  <input 
                    ref={serarchRef}
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered"
                  />
                  <button 
                    onClick={handleSearch}
                    className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                className="mt-8 btn btn-primary "
                onClick={() => {
                  setAsc(!asc);
                }}
              >
                {asc ? "Price High  To Low" : "Low To High"}
                {isSorting ? (
                  <svg
                    className="animate-spin 
                    border-2
                     rounded-full
                     border-r-rose-400                     
                     inline-block h-8 w-8 ml-6 ..."
                    viewBox="0 0 24 24"
                  ></svg>
                ) : null}
              </button>
            </div>
          </div>
        </div>
        {/* services  */}
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service) => (
              <ServiceCard service={service} key={service._id} />
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Services;