import React, {useContext} from 'react';
import './Selection.css'
import { ballsContext } from '../context/store';

import { Link } from 'react-router-dom';

const Selection = (props) => {
  
  const {shuffleBalls} = useContext(ballsContext);
  
  return (
    <div className='selection-container'>
      <div className='selections'>
      <h3>How many colors?</h3>
        {props.colors.map((color) => (
          color.num > 2 ?
            <Link to='/board' key={color.id} onClick={()=>shuffleBalls(color.num)} >
              <div className={`ball color${color.num}`} >
                {color.num}
              </div>
            </Link> : null
        ))}
      </div>
    </div>
  );
}

export default Selection;