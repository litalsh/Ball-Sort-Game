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
            
              <div className={`selection color${color.num}`} onClick={props.quantitySet(color.num)} >
                <Link to='/board' key={color.id} onClick={props.quantitySet(color.num)}></Link>
                {color.num}
                </Link>
              </div>
             : null
        ))}
      </div>
    </div>
  );
}

export default Selection;