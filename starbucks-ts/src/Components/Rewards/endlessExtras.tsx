import React from "react";
import EndlessExtrasHelper from "../subComponents/endlessExtrasHelper";


function EndlessExtras() {
    return (
    <section className="my-20 xl:px-32 mt-96">
        <div className="grid justify-items-center">
            <h1 className="text-2xl font-semibold">Endless Extras</h1>
            <div className="mx-8 my-6">
                <p className="max-w-xl text-center text-base">Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
            </div>
        </div>
        <div className=" md:flex px-8 md:justify-between">
            <EndlessExtrasHelper hval="Fun freebies" imgLink="https://s1.im.ge/2021/06/28/rgmLF.webp">
                Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
            </EndlessExtrasHelper>
            <EndlessExtrasHelper hval="Order & pay ahead" imgLink="https://s1.im.ge/2021/06/28/rgwxK.webp">
                Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
            </EndlessExtrasHelper>
            <EndlessExtrasHelper hval="Get to free faster" imgLink="https://s1.im.ge/2021/06/28/rg6n9.webp">
                Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
            </EndlessExtrasHelper>
        </div>
    </section>

    );
  }
  
  export default EndlessExtras;