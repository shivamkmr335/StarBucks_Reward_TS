import React from "react";

function StarCodes() {
    return (
    <section className="px-6 my-24 md:w-5/12 md:ml-48 md:max-w-xl">
        <h1 className="text-2xl font-semibold my-4 md:text-3xl">Star Codes</h1>
        <p className="text-sm font-semibold my-5 md:text-base">Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>

        <div className="border-solid border my-4 border-gray-600 p-3 rounded-xl font-semibold text-gray-700">Enter your Star Code</div>
        <button type="submit" className="mb-10 border-2 border-gray-600 px-2 rounded-full font-semibold float-right">Submit</button>
        <p className="text-sm clear-both my-4">Have a receipt but don't have a code?<br/>
            Go to <a href="https://www.starbucks.com/rewards" target="" className="text-green-700 underline">starbucks-stars.com</a>starbucks-stars.com to upload your receipt and collect your Stars.
        </p>
	
        <h1 className="text-2xl font-semibold mt-16 md:text-3xl">Questions?</h1>
        <p className="text-sm font-semibold mt-4 mb-20 md:text-base"> We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a href="https://www.starbucks.com/rewards" target="" className="text-green-700 underline">right over here</a> .</p>
    </section>

    );
  }
  
  export default StarCodes;