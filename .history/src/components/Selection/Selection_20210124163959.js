import React from 'react';

const Selection = (props) => {
  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      {props.quantity.map((color)=>(
        color.num > 2 ?
        <div className='color`${props.num}`>
          {color.num}
        </div> : null
      ))}
    </div>
   );
}
 
export default Selection;