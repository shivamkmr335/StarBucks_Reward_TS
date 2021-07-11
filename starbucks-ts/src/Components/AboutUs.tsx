import React from "react";

function AboutUs() {
    return (
        <section className="xl:ml-40 xl:w-10/12" >
        <ul className="p-6 lg:flex lg:justify-between">
            <li className="py-3">
                <div className="text-lg font-semibold flex justify-between">
                    <p h-12>About Us</p>
                    <div id="onea" className="hover:bg-gray-300 h-10 w-10 p-2 rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <ul className="hidden lg:inline-block" id="oneb">
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Our Heritage</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Our Coffee</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Stories and News</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Investor Relations</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Poilicies and Standards</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Customer Services</li>
                </ul>
            </li>
            <li className="py-3">
                <div className="text-lg font-semibold flex justify-between">
                    <p h-12>Careers</p>
                    <div id="twoa" className="hover:bg-gray-300 h-10 w-10 p-2 rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <ul className="hidden lg:inline-block" id="twob">
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Culture and Values</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Inclusion, Diversity, and Equity</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">College Achievement Plan</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">U.S. Careers</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">International Careers</li>
                </ul>
            </li>
            <li className="py-3"><div className="text-lg font-semibold flex justify-between">
                <p h-12>Social Impact</p>
                <div className="hover:bg-gray-300 h-10 w-10 p-2 rounded-full lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                </div>
                <ul className="hidden lg:inline-block" id="twob">
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Ethical Sourcing</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Leading in Sustainability</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Strengthing Communities</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Creating Opportunities</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Global Social Impact Report</li>
                </ul>
            </li>
            <li className="py-3">
                <div className="text-lg font-semibold flex justify-between">
                    <p h-12>For Business Partners</p>
                    <div className="hover:bg-gray-300 h-10 w-10 p-2 rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <ul className="hidden lg:inline-block" >
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Landlored Support Center</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Suppliers</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Corpoarte Gift Card Sales</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Office and Foodservice Coffee</li>
                </ul>
            </li>
            <li className="py-3">
                <div className="text-lg font-semibold flex justify-between">
                    <p h-12>Order and Pickup</p>
                    <div className="hover:bg-gray-300 h-10 w-10 p-2 rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <ul className="hidden lg:inline-block">
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Order on the App</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Order on the Web</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Delivery</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Order and Pickup Options</li>
                    <li className="text-gray-600 text-sm my-4 hover:text-black cursor-pointer">Explore and Find Coffee for Home</li>
                </ul>
            </li>
        </ul>
    </section>

    );
  }
  
  export default AboutUs;