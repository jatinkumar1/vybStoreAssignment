
import Creation from "./components/Creation";
import Faq from "./components/Faq";
import Getstarted from "./components/Getstarted";
import HeroSection2 from "./components/HeroSection2";
import HeroSection from "./components/HersoSection1";
import Influencers from "./components/Influencers";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";

export default function Home() {
  return (
    
      <div className="bg-[#0d0d0d]  lg:mx-4">
        <Navbar/>
        <HeroSection/>
        <HeroSection2/>
        <Travel/>
        <Creation/>
        <Influencers/>
        <Getstarted/>
        <Faq/>
      </div>
  
  );
}