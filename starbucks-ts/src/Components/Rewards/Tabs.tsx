import React, { Fragment } from 'react';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

interface Props {
    children: React.ReactElement[];
}

const Tabs: React.FC<Props> = ({children}) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const Tabwidth = 100/ children.length;

  return (
    <>
      <div className="bg-green-50 pt-8 justify-items-center">
            <h1 className="text-2xl w-screen text-center font-bold mb-6">Get your favourites for free</h1>
            <div className="max-w-md mx-auto relative">
              <div className="flex">
                {children.map((child,index)=>(
                  <div className="flex-1 text-center py-4 cursor-pointer  text-2xl font-bold" onClick={()=>setSelectedIndex(index)}>
                    {child.props.title}<span className="text-sm text-golden">★</span>
                  </div>
                ))}
              </div>
              <div className={"bg-gren h-1 absolute z-20 bottom-0 ease-in-out duration-700 transform " + "Translate-x-" + selectedIndex + "00%"} 
                style={{
                  width:Tabwidth+"%",
                  transform: "translateX("+selectedIndex+"00%)",
                }}>
              </div>
            </div>
        </div>
        <div className="bg-primary-100  relative">
                {children.map((child,index)=>(
                  <Transition
                    as={Fragment}
                    show={index===selectedIndex}
                    enter="transition-opacity duration-900"
                    enterFrom="opacity-0"
                    enterTo="opactiy-100"
                    entered="opacity-100"
                    leave="transition-opacity duration-900"
                    leaveFrom="opactiy-100"
                    leaveTo="opacity-0"
                  >
                    <div className="inset-0 absolute ">
                        <div className="md:flex bg-primary-200 justify-center md:h-72">
                        <img className="md:h-60 md:mt-8 max-w-80 h-80 pt-8" src={child.props.imgLink} alt=""></img>
                        <div className="flex flex-wrap justify-center md:content-center bg-primary-200 md:w-72 pb-8">
                            <h3 className="font-bold text-xl mb-4">{child}</h3>
                            <p className="text-sm font-medium text-center md:text-left">{child.props.description}</p>
                        </div>
                        </div>
                    </div>
                  </Transition>
                ))}
        </div>
    
    </>
  );
};

Tabs.defaultProps = {
}

export default  React.memo(Tabs);