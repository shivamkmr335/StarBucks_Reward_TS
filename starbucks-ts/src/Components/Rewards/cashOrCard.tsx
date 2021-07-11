import React from "react";
import CashOrCardHelper from "../subComponents/cashOrCardHelper";

function CashOrCard() {
    return (
        <section className="bg-background1 py-16 px-6 xl:px-44">
        <div className="grid justify-items-center">
            <h1 className="text-2xl font-semibold">Cash or Card, you earn Stars</h1>
            <p className="max-w-xl text-center text-base">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
        </div>

            
        <div className="lg:flex">
            <div className="text-sm w-1/5">
                <span className="text-xl font-semibold">1* per dollar </span><br/>
                Pay as you go
            </div>
            <div className="md:flex">
                <CashOrCardHelper hval="Scan and pay seperately" imgLink="https://s1.im.ge/2021/06/28/rgtP8.png">Use cash or credit/debit card at the register.</CashOrCardHelper>
                <CashOrCardHelper hval="Save payment in the app" imgLink="https://s1.im.ge/2021/06/28/rgykh.png">Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</CashOrCardHelper>
                
            </div>
        </div>
        <div className="lg:flex">
            <div className="text-sm mt-8 w-3/12">
                <span className="text-xl font-semibold">2* per dollar </span><br/>
                Add funds in the app
            </div>
            <div className="md:flex">
                <CashOrCardHelper hval="Preload" imgLink="https://s1.im.ge/2021/06/28/rgCFM.png">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</CashOrCardHelper>
                <CashOrCardHelper hval="Register your gift card" imgLink="https://s1.im.ge/2021/06/28/rgxRD.png">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</CashOrCardHelper>
                
            </div>
        </div>
            <hr/>
        <div className="lg:flex">
            <div className="text-sm mt-8 lg:w-3/12">
                <span className="text-xl font-semibold">Up to 3* per dollar </span><br/>
                Works Starbucks® Rewards Visa® Card
            </div>
            <div>
                <CashOrCardHelper hval="Earns Stars even faster" imgLink="https://s1.im.ge/2021/06/28/rgE9Y.png">Earn Stars on all purchases you make with our <a href="https://www.starbucks.com/rewards" target="" className="text-green-700 underline">credit card</a> in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</CashOrCardHelper>
            </div>
        </div>
    </section>

    );
  }
  
  export default CashOrCard;