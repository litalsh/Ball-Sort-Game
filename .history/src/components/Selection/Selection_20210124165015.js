import React from 'react';
import './Selection.css'

const Selection = (props) => {
  return ( 
      <h3>How many colors?</h3>
    <div className='Selection-container'>
      {props.quantity.map((color)=>(
        color.num > 2 ?
        <div className={`selection color${color.num}`}>
          {color.num}
        </div> : null
      ))}
    </div>
   );
}
 
export default Selection;