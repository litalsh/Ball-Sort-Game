import React from 'react';
import './Selection.css'
import { v4 as uuidv4 } from 'uuid';

import { Link } from 'react-router-dom';

const Selection = (props) => {
  

  
  return (
    <div className='selection-container'>
      <h3>How many colors?</h3>
      <div className='selections'>
        {props.colors.map((color) => (
          color.num > 2 ?
            <Link to={{pathname:'/board', quantProps: randomArr}} key={color.id} onClick={()=>randomized(color.num)} >
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