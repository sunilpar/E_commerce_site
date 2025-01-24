import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

//pngs
import heropng from "../../assets/heroGradient.png";
import hero11 from "../../assets/hero11.png";
import hero22 from "../../assets/hero22.png";
import hero44 from "../../assets/hero44.jpg";
import hero55 from "../../assets/hero55.jpg";
import hero6 from "../../assets/hero6.jpg";

function Hero() {

    useEffect(() => {
                gsap.registerPlugin(ScrollTrigger);
        gsap.to(".B", {
            scrollTrigger: {
            trigger: ".B",
            scrub: 1,
            },
            y: -50,
            duration: 1,
        });
        gsap.to(".A", {
            scrollTrigger: {
            trigger: ".A",
            scrub: 1,
            },
            y: 50,
            duration: 1,
        });
        gsap.to(".C", {
            scrollTrigger: {
            trigger: ".B",
            scrub: 1,
            },
            y: -100,
            duration: 1,
        });
    })
  
  return (
    // mian div
    <div
      className=" flex justify-center flex-col  "
      style={{
        backgroundImage: `url(${heropng})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen  flex flex-col flex-wrap justify-center ">
        <h1 className="md:ml-60 sm:ml-5 ml-1 min-h-fit max-w-[800px] font-outfit text-5xl sm:text-6xl font-bold text-left h-fit width-[100px]  text-[#F5F5F7]">
          From Bestsellers to Hidden Gems – Find Your Perfect Read.
        </h1>
        <p className="md:ml-60 sm:ml-5 ml-1 min-h-fit max-w-[600px] font-roboto text-xl sm:text-2xl font-bold text-left width-[100px]  text-[#F5F5F7]">
          Discover a world of stories that captivate, inspire, and entertain.
          From bestselling novels and hidden literary gems to thrilling fantasy
          and immersive fiction, our curated collection offers something for
          every reader. Dive into epic adventures, explore diverse voices, and
          let every page turn bring you closer to your next unforgettable read.
        </p>
        <div className="flex flex-row opacity-80">
          <Link to={"/test"}>
            <button 
              className="md:ml-60 sm:ml-5 ml-1 mt-6 text-[#F5F5F7] flex flex-row font-outfit font-bold text-xl rounded-xl w-fit hover:ring-1 px-4 py-1 hover:bg-[#F5F5F7] hover:text-[#161617] ring-[#F5F5F7] ring-1 hover:duration-200"
            >
              Sign up
            
            </button>

          </Link>
          
          <Link to={"/login"}>
              <button
              className=" ml-2 mt-6 hover:text-[#F5F5F7] hover:bg-[#161617] flex flex-row font-outfit font-bold text-xl rounded-xl w-fit hover:ring-1 px-6 py-1 bg-[#F5F5F7] text-[#161617]
                                  ring-[#F5F5F7] ring-1 hover:duration-200"
            >
              Login
            </button>
          </Link>
          
        </div>
      </div>
      <div className="flex flex-row gap-5 mb-9 justify-center ">
        {/* books */}
        <div className="A   rounded-3xl   h-[464px] min-w-[249px] mt-[-50px]  opacity-60"><img src={hero11} className="w-full h-full object-cover rounded-3xl" alt="" /></div>
        <div className="B position-relative rounded-3xl  h-[464px] min-w-[249px] mt-[50px]  opacity-60"><img src={hero22} className="w-full h-full object-cover rounded-3xl" alt="" /></div>
        <div className="C rounded-3xl  h-[464px] min-w-[249px] mt-[100px]  opacity-60"><img src={hero6} className="w-full h-full object-cover rounded-3xl" alt="" /></div>
        <div className="B position-relative rounded-3xl  h-[464px] min-w-[249px] mt-[50px]  opacity-60"><img src={hero55} className="w-full h-full object-cover rounded-3xl" alt="" /></div>
        <div className="A rounded-3xl  h-[464px] min-w-[249px] mt-[-50px]  opacity-60"><img src={hero44} className="w-full h-full object-cover rounded-3xl" alt="" /></div>
      </div>
    </div>
  );
}

export default Hero;
