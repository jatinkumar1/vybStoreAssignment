
import React from "react";

export default function Creation() {
  return (
    <div className="px-5 flex flex-wrap mt-10">

      <div className="w-full  lg:w-2/5 px-5 flex justify-center items-center">
        <p className="text-2xl text-center lg:text-4xl text-primary "> From Creation to Monetization: Vyb Store Has it All</p>
      </div>

      
      <div className="text-white w-full   lg:w-3/5 grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-2 p-4">
        
        
        <div className="bg-black rounded-2xl p-4 h-80 flex flex-col justify-between transform translate-y-4 lg:w-full lg:h-full md:h-72">
          <h2 className="text-lg lg:text-4xl font-semibold text-center m-0">Trusted By Influencers</h2>
          <p className="text-sm sm:text-lg text-center mt-2 m-0">
            A trusted platform for influencers to grow and earn.
          </p>
          <img
            src="/images/a.png"
            alt="a"
            className="w-full h-48 object-contain mt-4"
          />
        </div>
        
        
        <div className="bg-black rounded-2xl p-4 h-72 flex flex-col justify-between transform translate-y-6 lg:-translate-y-1 sm:mt-2 lg:w-full lg:h-full">
          <h2 className="text-xl lg:text-4xl font-semibold text-center m-0">Secured Data</h2>
          <p className="text-sm sm:text-lg text-center mt-1 m-0">
            Advanced security measures to protect your valuable data.
          </p>
          <img
            src="/images/b.png"
            alt="b"
            className="w-full h-36 object-contain mt-4"
          />
        </div>
        
        <div className="bg-black rounded-2xl p-4 h-80 flex flex-col justify-between transform translate-y-1 sm:mt-2 lg:w-full lg:h-full">
          <h2 className="text-xl lg:text-4xl font-semibold text-center m-0">Authentic Payment Partner</h2>
          <p className="text-sm sm:text-lg text-center mt-2 m-0">
            Reliable, fast, and secure payments you can trust.
          </p>
          <img
            src="/images/c.png"
            alt="c"
            className="w-full h-48 object-contain mt-4"
          />
        </div>
        
      
        <div className="bg-black rounded-2xl p-4 h-80 flex flex-col justify-between sm:mt-2 lg:w-full transform -translate-y-3 lg:h-full">
          <h2 className="text-xl lg:text-4xl font-semibold text-center m-0">Monetize Your Influence</h2>
          <p className="text-sm sm:text-lg text-center mt-2 m-0">
            Seamlessly turn your influence into consistent revenue.
          </p>
          <img
            src="/images/d.png"
            alt="d"
            className="w-full h-48 object-contain mt-4"
          />
        </div>
        
      </div>
    </div>
  );
}
