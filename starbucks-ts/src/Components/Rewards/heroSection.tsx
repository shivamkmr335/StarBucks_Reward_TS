import React from "react";

function HeroSection() {
    return (
    <section  className="md:flex md:justify-between pl-6 bg-gradient-to-br from-green-300 to-white">
        <div className="grid justify-items-center md:w-full py-6 md:justify-items-start xl:px-40 xl:py-32 md:align-middle max-h-96 md:py-20">
            <h3 className="text-4xl text-center font-semibold md:text-left">FREE COFFEE <br/> IS A TAP AWAY</h3>
            <p className="my-4 font-medium">Join now to start earning Rewards</p>
            <button className="bg-green-600 h-8  text-white py-1 px-4 rounded-full font-medium my-3 hidden md:block">Join now</button>
            <p className="text-lg font-medium hidden md:block">Or <a href="https://www.starbucks.com/rewards" className="underline hover:no-underline">join in the app</a> for the best experience</p>
            <button className="bg-green-600 text-white py-1 px-4 rounded-full font-medium my-3 md:hidden">Join in the app</button>
            <a className="md:hidden underline hover:no-underline" href="https://www.google.com/">Or join online</a>
        </div>
        <div className="w-full"> 
            <img className="hidden w-full md:block " src="https://s1.im.ge/2021/06/28/rg58z.png" alt=""></img>
            <img className="md:hidden" src="https://s1.im.ge/2021/06/28/rg09S.png" alt=""></img>
        </div>
    </section>
    );
  }
  
  export default HeroSection;