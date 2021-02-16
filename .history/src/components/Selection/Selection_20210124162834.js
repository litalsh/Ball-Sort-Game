import React from 'react';

const Selection = (props) => {
  numbers.slice(2)
  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      {props.quantity.map((color)=>(
        color.num > 2 ?
        <div className='colors-selection'>
          {color.num}
        </div> : null
      ))}
    </div>
   );
}
 
export default Selection;