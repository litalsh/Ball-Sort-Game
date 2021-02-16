import React from 'react';

const Selection = (props) => {
  // const numbers = props.quantity.splice(0,2);
  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      <div className='colors-selection'>
      {props.quantity}
      </div>
    </div>
   );
}
 
export default Selection;