import React from 'react';

const Monetize = () => {
    return (
        <div className=" py-10 text-center">
            
            <div className="max-w-4xl mx-auto bg-green-500 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 text-left text-white mb-6 md:mb-0 md:pr-10">
            <h3 className="text-2xl font-bold">Connect with Influencers</h3>
            <p className="mt-2">Explore various influencers and collaborate to grow your brand...</p>
          </div>
          <div className="md:w-2/5   rounded-lg shadow-lg text-left">
            
            <img
            src='/images/2.png'
            alt='1st'
            className=''
          />
          </div>
        </div>
        </div>
    );
};

export default Monetize;