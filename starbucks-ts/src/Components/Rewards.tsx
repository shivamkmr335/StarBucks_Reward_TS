import React from 'react';
import CashOrCard from './Rewards/cashOrCard';
import EarningStars from './Rewards/earningStars';
import EndlessExtras from './Rewards/endlessExtras';
import GettingStarted from './Rewards/gettingStarted';
import HeroSection from './Rewards/heroSection'
import StarCodes from './Rewards/starCodes';
import Tab from './Rewards/Tab';
import Tabs from './Rewards/Tabs';


interface Props {
}

const Rewards: React.FC<Props> = (props) => {

  const tabs=[
    {imgLink:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png", description:"Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.", title:25,content:"Customize your drink"},
    {imgLink:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png", description:"Pair coffee cake or an almond croissant with your fresh cup of hot brew.", title:50,content:"Brewed hot coffee, bakery item or hot tea"},
    {imgLink:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png", description:"Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.", title:150,content:"Handcrafted drink, hot breakfast or parfait"},
    {imgLink:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png", description:"Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.", title:200,content:"Salad, sandwich or protein box"},
    {imgLink:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png", description:"Take home a signature cup, a bag of coffee or your choice of select coffee accessories.", title:400,content:"Select merchandise or at-home coffee"}
  ];
  return (
    <>
        <div className="sticky top-0 w-full bg-primary-400 text-white font-bold py-2 pl-4 md:pl-20 z-10">STARBUCKS® REWARD</div>
        <HeroSection/>
        <GettingStarted/>
        <Tabs>{tabs.map( tab => <Tab title={tab.title} description={tab.description} imgLink={tab.imgLink}>{tab.content}</Tab> )}</Tabs>
        <EndlessExtras/>
        <CashOrCard/>
        <StarCodes/>
        <EarningStars/>
    </>
  );
};



export default Rewards;