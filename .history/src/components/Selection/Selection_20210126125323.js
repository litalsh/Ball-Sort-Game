import React, { useState } from 'react';
import './Selection.css'
import { Link } from 'react-router-dom';

const Selection = (props) => {

  const [quantity, setQuantity] = useState();
  
  return (
    <div className='selection-container'>
      <h3>How many colors?</h3>
      <div className='selections'>
        {props.colors.map((color) => (
          color.num > 2 ?
            <Link to={{pathName:'/board'}} key={color.id} onClick={setQuantity(color.num)}>
              <div className={`selection color${color.num}`} >
                {color.num}
              </div>
            </Link> : null
        ))}
      </div>
    </div>
  );
}

export default Selection;