
import React from 'react';

const Signup = () => {
  return (
    <div className="bg-[#0d0d0d] py-10 text-center">
      
      <div className="max-w-4xl mx-auto bg-[#c85454] p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side Text */}
        <div className="md:w-3/5 text-left text-white mb-6 md:mb-0 md:pr-10">
          <h3 className="text-2xl font-semibold mb-4">Sign Up and create your own store hassle-free.</h3>
          <p>Join us via Google Sign-in and verify your influencer status by entering your social media ID and unlock your store @ zero cost.</p>
        </div>
        
        {/* Right Side Form */}
        <div className="md:w-2/5 rounded-lg ">
          {/* <button className="flex items-center justify-center w-full bg-gray-800 text-white py-2 rounded-md mb-4">
            <img src="/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2" />
            Login with Google
          </button>
          <p className="text-center text-gray-400 mb-4">OR</p>
          <form>
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white focus:outline-none"
              placeholder="Email"
            />

            <label className="block text-white mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white focus:outline-none"
              placeholder="Password"
            />

            <button className="w-full bg-[#00DC82] text-black py-2 rounded-md">Login</button>
          </form>
          <p className="text-center text-gray-400 mt-4">
            Don’t have an account? <a href="#" className="text-[#00DC82] underline">Get Started</a>
          </p> */}
          <img
            src='/images/1.png'
            alt='1st'
            className="h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;


// import React from 'react';

// const CardSection = () => {
//   const cards = [
//     {
//       title: "Sign Up and create your own store hassle-free.",
//       description: "Join us via Google sign-in and verify your influencer status by entering your social media ID and unlock your store @ zero cost.",
//       buttonLabel: "Get Started",
//       form: {
//         title: "Login with Google",
//         fields: ["Email", "Password"],
//       },
//       backgroundColor: "#d55656"
//     },
//     {
//       title: "Monetize your influencer status: Earn money adding real value to your true followers!",
//       description: "Let VYB the money now! It's here and you can withdraw it periodically.",
//       influencer: {
//         name: "Samira Hadid",
//         username: "@samirahadid",
//         links: ["Instagram", "Twitter"],
//       },
//       backgroundColor: "#00DC82"
//     },
//     {
//         title: "Monetize your influencer status: Earn money adding real value to your true followers!",
//         description: "Let VYB the money now! It's here and you can withdraw it periodically.",
//         influencer: {
//           name: "Samira Hadid",
//           username: "@samirahadid",
//           links: ["Instagram", "Twitter"],
//         },
//         backgroundColor: "#00DC82"
//       },
//       {
//         title: "Monetize your influencer status: Earn money adding real value to your true followers!",
//         description: "Let VYB the money now! It's here and you can withdraw it periodically.",
//         influencer: {
//           name: "Samira Hadid",
//           username: "@samirahadid",
//           links: ["Instagram", "Twitter"],
//         },
//         backgroundColor: "#00DC82"
//       },
//     // Add more card objects as needed...
//   ];

//   return (
//     <section className="max-w-3xl mx-auto text-center p-6 h-screen overflow-y-auto space-y-8">
//       <h2 className="text-2xl font-bold text-green-600 mb-8">How to get started?</h2>
//       <div className="relative space-y-[-80px]"> {/* Negative space-y for overlap */}
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-8 relative z-[1] hover:z-[2] transition-all"
//             style={{
//               backgroundColor: card.backgroundColor,
//               marginBottom: '2rem',
//             }}
//           >
//             <div className="flex-1 text-left space-y-4">
//               <h3 className="text-xl font-bold">{card.title}</h3>
//               <p className="text-gray-700">{card.description}</p>
//               {card.buttonLabel && <button className="text-green-600 font-semibold">{card.buttonLabel}</button>}
//             </div>
//             <div className="flex-1 flex justify-center">
//               {card.form ? (
//                 <form className="bg-black text-white p-4 rounded-lg space-y-2">
//                   <h4>{card.form.title}</h4>
//                   {card.form.fields.map((field, i) => (
//                     <input key={i} type="text" placeholder={field} className="block w-full p-2 mb-2 rounded"/>
//                   ))}
//                   <button className="bg-green-600 text-white py-1 px-4 rounded">Login</button>
//                 </form>
//               ) : (
//                 <div className="text-left p-4 bg-black rounded-lg text-white">
//                   <h4>{card.influencer.name}</h4>
//                   <p>{card.influencer.username}</p>
//                   <button className="bg-green-600 py-1 px-3 mt-2 rounded">Follow</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CardSection;
