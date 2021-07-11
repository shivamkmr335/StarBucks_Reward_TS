import React from "react";
import Gsh from "../subComponents/gsh";


function GettingStarted() {
    return (
        <section className="my-20 xl:px-32">
        <div className="grid justify-items-center">
            <h1 className="text-2xl font-semibold">Getting started is easy</h1>
            <div className="mx-8 my-6">
                <p className="max-w-xl text-center text-base">Earn Stars and get rewarded in a few easy steps.</p>
            </div>
        </div>
        <div className=" md:flex md:justify-between px-8">
            <Gsh hval="Create an account" imgLink="https://s2.im.ge/2021/06/28/rgiuy.webp">
                To get started, <span className="underline text-green-700">join now</span>. You can also <span className="underline text-green-700">join in the app</span> to get access to the full range of Starbucks® Rewards benefits.
            </Gsh>
            <Gsh hval="Order and pay how you’d like" imgLink="https://s2.im.ge/2021/06/28/rgUfJ.webp">
                Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how
            </Gsh>
            <Gsh hval="Earn Stars, get Rewards" imgLink="https://s2.im.ge/2021/06/28/rgLPa.webp">
                As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
            </Gsh>
        </div>
    </section>

    );
  }
  
  export default GettingStarted;