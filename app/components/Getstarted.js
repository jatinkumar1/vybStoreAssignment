

import React from "react";
import Signup from "../Stardepages/Signup";
import Monetize from "../Stardepages/Monetize";
import Call from "../Stardepages/Call";
import Build from "../Stardepages/Build";

export default function Getstarted() {
    return (
        <div className="text-center mx-4">
            <h2 className="text-3xl font-bold text-[#00DC82] mb-10">How to get started?</h2>
            
        
            <div className="h-screen overflow-y-scroll relative">
               
                <div className="sticky top-0 w-full h-screen" style={{ zIndex: 1 }}>
                    <Signup />
                </div>

              
                <div className="sticky top-0 w-full h-screen" style={{ zIndex: 2 }}>
                    <Monetize />
                </div>

                <div className="sticky top-0 w-full h-screen" style={{ zIndex: 3 }}>
                    <Call />
                </div>

                
                <div className="sticky top-0 w-full h-screen" style={{ zIndex: 4}}>
                    <Build />
                </div>
            </div>
        </div>
    );
}
