import React from 'react';

interface Props {
    title:Number;
    imgLink: string;
    description: string;
    children: React.ReactNode;
}

const Tab: React.FC<Props> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

Tab.defaultProps = {
}

export default  React.memo(Tab
);