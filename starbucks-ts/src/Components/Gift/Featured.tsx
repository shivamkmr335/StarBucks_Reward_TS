import React from 'react';

interface Props {
}

const Featured: React.FC<Props> = (props) => {
  return (
    <>  
      <div className="mt-8 flex">
          <img src="https://www.starbucks.com/weblx/images/placeholder.png" alt="50 years" />
          <img src="https://www.starbucks.com/weblx/images/placeholder.png" alt="50 years" />
          <img src="https://www.starbucks.com/weblx/images/placeholder.png" alt="50 years" />
          <img src="https://www.starbucks.com/weblx/images/placeholder.png" alt="50 years" />
          <img src="https://www.starbucks.com/weblx/images/placeholder.png" alt="50 years" />
          <img src="https://www.starbucks.com/weblx/images/placeholder.png" alt="50 years" />
      </div>
    </> 
  );
};

Featured.defaultProps = {
}

export default  React.memo(Featured);