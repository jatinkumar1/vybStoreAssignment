import React from "react";
export default function HeroSection() {
    const title = "One Stop Marketplace For Influencers";
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-5">
            <div className=" relative p-4 text-4xl font-bold">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <span className="bg-white px-2 py-3 text-4xl lg:text-6xl md:text-5xl rounded-xl" >One</span>
                        <span className="bg-white px-2 py-3 text-4xl lg:text-6xl md:text-5xl rounded-xl" >Stop</span>
                    </div>
                    <div className="bg-white px-2 py-3 w-fit text-4xl lg:text-6xl md:text-5xl rounded-xl">Marketplace</div>
                    <div className="flex gap-2">
                        <span className="bg-white px-2 py-3 text-4xl lg:text-6xl md:text-5xl rounded-xl" >For</span>
                        <span className="bg-primary px-2 py-3 text-4xl lg:text-6xl md:text-5xl rounded-xl" >Influencers</span>
                    </div>
                </div>
                <div className="mt-8 text-white text-xl lg:text-4xl">
                    "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content - All in One Hub."
                </div>
                {/* <div className="absolute bottom-5  bg-blue-500 text-white p-4">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-3xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-10">Demo store</button>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-3xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Waitlist</button>
                </div> */}
            </div>

            <div className="p-4">
                <img
                    src="/images/iamge.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

