import React from 'react';

const Selection = (props) => {
  // const numbers = props.quantity.splice(0,2);
  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      {props.quantity.map((color)=>(
        <div className='colors-selection'>
          {color.num}
        </div>
      ))}
    </div>
   );
}
 
export default Selection;