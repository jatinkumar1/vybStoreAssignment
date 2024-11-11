import React from "react";
import { GoArrowUpRight } from "react-icons/go";
export default function Influencers() {
    return (
        <div className="my-8">
            <div>
                <h2 className="text-center text-3xl lg:text-5xl text-primary my-4">Our Influencers</h2>
            </div>
            <div className="mt-10 overflow-x-auto lg:flex lg:justify-center">
                <div className="inline-flex gap-7 pl-4">
                    
                    {["Influencer1", "Influencer2", "Influencer3", "Influencer4"].map((name, index) => (
                        <div key={index} className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 overflow-hidden rounded-full group">
                            
                            <img
                                // src={`/images/i-${index + 1}.png`}
                                src="/images/influence.png"
                                alt={name}
                                className="w-full h-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                            />
                            
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end  justify-center opacity-0  group-hover:opacity-100 transition duration-100">
                                <div className="flex gap-1 bg-white px-2 lg:px-2 text-black  mb-10 rounded-2xl">
                                <span className="text-sm lg:text-xl font-semibold">{name}</span>
                                <div className="flex justify-center items-center text-md lg:text-2xl font-extrabold"><GoArrowUpRight /></div>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

