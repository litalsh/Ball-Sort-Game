import React from 'react';
import './Selection.css'

const Selection = (props) => {
  return (
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      <div className='selections'>
        {props.quantity.map((color) => (
          color.num > 2 ?
            <div className={`selection color${color.num}`}>
              {color.num}
            </div> : null
        ))}
      </div>
    </div>
  );
}

export default Selection;