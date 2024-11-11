import React from "react";

export default function Travel() {
    return (

        <div className="bg-black mx-5 mt-8">
            <div className=" relative ">
                <img src="/images/Frame 1574.png" alt="back" className="w-full h-full object-cover rounded-lg"></img>
                <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
                    <h1 className="md:text-3xl text-4xl lg:text-8xl font-bold mt-6">TRAVEL</h1>
                    <p className="text-center md:text-lg text-sm lg:text-2xl max-w-md mt-4">Turn your travel experience into itinerary travel package with VYB store and share it with your true followers</p>
                </div>

            </div>

            <div>
                <div className="mt-8">

                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl text-center ">Explore Our Curated Travel Itineraries</h3>
                </div>

                <div className="overflow-x-scroll flex space-x-6 p-4 snap-x snap-mandatory  no-scrollbar">
                    <div className="flex-shrink-0 snap-start">
                        <img
                            src="/images/Frame 1182.png"
                            className=" pl-5 w-60 h-96 object-contain rounded-lg"
                            alt="Travel Image 1"
                        />
                    </div>
                    <div className="flex-shrink-0 snap-start">
                        <img
                            src="/images/Frame 1183.png"
                            className="w-60 h-96 object-contain rounded-lg"
                            alt="Travel Image 2"
                        />
                    </div>
                    <div className="flex-shrink-0 snap-start">
                        <img
                            src="/images/Frame 1575.png"
                            className="w-60 h-96 object-contain rounded-lg"
                            alt="Travel Image 3"
                        />
                    </div>
                    <div className="flex-shrink-0 snap-start">
                        <img
                            src="/images/Frame 1182.png"
                            className="w-60 h-96 object-contain rounded-lg"
                            alt="Travel Image 1"
                        />
                    </div>
                    <div className="flex-shrink-0 snap-start">
                        <img
                            src="/images/Frame 1183.png"
                            className="w-60 h-96 object-contain rounded-lg"
                            alt="Travel Image 2"
                        />
                    </div>
                    <div className="flex-shrink-0 snap-start">
                        <img
                            src="/images/Frame 1575.png"
                            className="w-60 h-96 object-contain rounded-lg"
                            alt="Travel Image 3"
                        />
                    </div>
                </div>


            </div>

            <div>
                <div className="mt-8 mb-8">

                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl text-center ">How to List?</h3>
                </div>
                <div className="relative w-full h-full">
                    <img src="/images/unsplash_L51aR1NLGXc.png" className="w-full h-full object-contain">
                    </img>
                    <div className="absolute bottom-5 text-center w-full">
                        <h3 className="text-lg text-white lg:text-4xl">You Curate Experience, We Make It Happen</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
