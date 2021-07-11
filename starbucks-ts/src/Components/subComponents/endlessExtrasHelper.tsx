import React from 'react';

interface Props {
    imgLink?: string,
    hval?: string
}

const EndlessExtrasHelper: React.FC<Props> = (props) => {
  return (
    <div className="flex md:grid md:justify-items-center p-4">
            <img className="w-28 h-28 mb-2" src={props.imgLink} alt=""></img>
            <div className="md:grid md:justify-items-center ml-3">
                <h3 className="text-lg font-semibold">{props.hval}</h3>
                <p className="text-sm mt-2 md:max-w-sm md:text-center md:font-medium">{props.children}</p>
                <a href="https://www.starbucks.com/rewards" className="text-sm mt-4 block text-green-700 underline md:text-base">Learn more</a>
            </div>
    </div>
  );
};



export default EndlessExtrasHelper;

