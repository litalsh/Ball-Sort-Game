import React from 'react';

const Selection = (props) => {
  const numbers = props.q
  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      <div className='colors-selection'>

      </div>
    </div>
   );
}
 
export default Selection;