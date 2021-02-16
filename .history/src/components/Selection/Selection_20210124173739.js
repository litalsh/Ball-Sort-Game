import React from 'react';
import './Selection.css'

const Selection = (props) => {
  return (
    <div className='selection-container'>
      <h3>How many colors?</h3>
      <div className='selections'>
        {props.colors.map((color) => (
          color.num > 2 ?
            <div className={`selection color${color.num}`} key={color.id}>
              {color.num}
            </div> : null
        ))}
      </div>
    </div>
  );
}

export default Selection;