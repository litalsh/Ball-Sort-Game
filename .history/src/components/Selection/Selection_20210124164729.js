import React from 'react';
import './Selection.css'

const Selection = (props) => {
  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      {props.quantity.map((color)=>(
        color.num > 2 ?
        <div className={`ball color${color.num}`}>
          {color.num}
        </div> : null
      ))}
    </div>
   );
}
 
export default Selection;