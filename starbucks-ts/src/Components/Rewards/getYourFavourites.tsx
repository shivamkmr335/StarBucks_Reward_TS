import React from "react";

function GetYourFavourites() {
    return (
    <section>
        <div className="bg-green-50 pt-8 grid justify-items-center">
            <h1 className="text-2xl font-bold mb-6">Get your favourites for free</h1>
            <ul className="flex">
                <li className="text-2xl font-bold p-6 border-b-4 border-green-700">25<span className="text-sm text-golden">★</span> </li>
                <li className="text-2xl font-bold p-6">50<span className="text-sm text-golden">★</span> </li>
                <li className="text-2xl font-bold p-6">150<span className="text-sm text-golden">★</span> </li>
                <li className="text-2xl font-bold p-6">200<span className="text-sm text-golden">★</span> </li>
                <li className="text-2xl font-bold p-6">400<span className="text-sm text-golden">★</span> </li>
            </ul>
        </div>
        <div className="bg-green-100 md:flex justify-center">
            <img className="md:w-96" src="https://s2.im.ge/2021/06/28/rgjQ6.webp" alt=""></img>
            <div className="grid justify-items-center md:w-72 py-16 ml-8">
                <h3 className="font-bold text-xl mb-4">Customise your drink</h3>
                <p className="text-sm font-medium text-center md:text-left">Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>
            </div>
        </div>
    </section>

    );
  }
  
  export default GetYourFavourites;