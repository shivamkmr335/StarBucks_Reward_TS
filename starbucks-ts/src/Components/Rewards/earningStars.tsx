import React from "react";

function EarningStars() {
    return (
        <section className="px-6 my-8 bg-gray-200 py-12 font-semibold xl:px-44 ">
        <h4 className="text-sm">At participating stores. Restrictions apply.</h4>
        <div className="flex flex-col md:flex-row justify-evenly text-sm">
            <div className="py-8 w-full flex flex-col justify-between">
                <div>
                    <h2 className="font-semibold text-base my-3">EARNING STARS</h2>
                    <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.
                        <br/><br/>
                        Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.
                        <br/><br/>
                        Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.
                        <br/><br/>
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold text-base my-3">BENEFITS</h2>
                    <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                </div>
            </div>
            <div className="md:py-8 w-full md:pl-8 flex flex-col justify-between">
                <div>
                    <h2 className="font-semibold text-base my-3">TERMS OF USE</h2>
                    <p>
                        For full program details visit <a href="https://www.starbucks.com/rewards" target="" className="text-green-700 underline">starbucks.com/rewards/terms</a>.
                        <br/><br/>
                        * Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.
                        <br/><br/>
                        Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the  <a href="https://www.starbucks.com/rewards" target="" className="text-green-700 underline">Starbucks Store Locator</a> and search for locations honoring “Redeem Rewards”.
                        <br/><br/>
                        Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold text-base my-3">REEDEEMING REWARDS</h2>
                    <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all stores honor tiered Rewards. Select stores redeem 150 Stars for free food or drink items only.</p>
                </div>
            </div>
        </div>
    </section>

    );
  }
  
  export default EarningStars;