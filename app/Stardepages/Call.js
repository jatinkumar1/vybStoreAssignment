
import React from 'react';

const Call = () => {
  return (
    <div className=" py-10 text-center">
      
      <div className="max-w-4xl mx-auto bg-blue-600 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
        
        
        <div className="md:w-3/5 text-left text-white mb-6 md:mb-0 md:pr-10">
          <h3 className="text-2xl font-semibold mb-4">Sign Up and create your own store hassle-free.</h3>
          <p>Join us via Google Sign-in and verify your influencer status by entering your social media ID and unlock your store @ zero cost.</p>
        </div>
    
        <div className="md:w-2/5  rounded-lg  text-center">
        
          <img
            src='/images/3.png'
            alt='1st'
            className=''
          />
        </div>
      </div>
    </div>
  );
};

export default Call;
