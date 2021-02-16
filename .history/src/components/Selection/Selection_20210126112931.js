import React from 'react';
import './Selection.css'
import { Link } from 'react-router-dom';

const Selection = (props) => {
  
  return (
    <div className='selection-container'>
      <h3>How many colors?</h3>
      <div className='selections'>
        {props.colors.map((color) => (
          color.num > 2 ?
            <Link to='/board'><div className={`selection color${color.num}`} key={color.id} onClick={quantity(color.num)} >
              {color.num}
            </div></Link> : null
        ))}
      </div>
    </div>
  );
}

export default Selection;