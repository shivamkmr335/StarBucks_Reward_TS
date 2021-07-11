import React from 'react';

interface Props {
    imgLink?: string,
    hval?: string
}

const Gsh: React.FC<Props> = (props) => {
  return (
    <div className="flex align-top md:grid md:justify-items-center p-4">
                
        <img className="w-12 h-12 mb-4" src={props.imgLink} alt=""></img>
        <div className="md:grid md:justify-items-center ml-3">
            <h3 className="text-lg font-semibold">{props.hval}</h3>
            <p className="text-sm mt-2 md:max-w-xs md:text-center md:font-medium">{props.children}</p>
        </div>
    </div>
  );
};


export default Gsh;

