import React from 'react';
import Featured from './Gift/Featured';

interface Props {
}

const Gift: React.FC<Props> = (props) => {
  return (
    <>
      <div className="sticky top-0 w-full bg-primary-400 text-primary-50 text-sm font-bold py-4 pl-28">Buying multiple cards? <span className="ml-12 text-base border border-primary-50 rounded-full p-1 px-3">Get Started</span></div>
        <Featured/>
    </>
  );
};

Gift.defaultProps = {
}

export default  React.memo(Gift);