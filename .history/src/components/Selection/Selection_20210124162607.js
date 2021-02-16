import React from 'react';

const Selection = (props) => {
  const numbers = props.quantity;
  numbers.slice(2)
  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      {numbers.map((color)=>(
        <div className='colors-selection'>
          {color.num}{console.log('number ', numbers, 'props', props.quantity)}
        </div>
      ))}
    </div>
   );
}
 
export default Selection;