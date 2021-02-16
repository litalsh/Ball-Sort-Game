import React, {useContext} from 'react';
import './Selection.css'
import { ballsContext } from '../context/store';

import { Link } from 'react-router-dom';

const Selection = (props) => {
  
  const {shuffleBalls} = useContext(ballsContext);
  
  return (
    <div className='selection-container'>
      <div>
      <h4> Try to sort the colored balls in the tubes until all balls with the same color stay in the same tube.</h4>
      <h3>How many colors would you like to sort?</h3>
      </div>
      <div className='selections'>
        {props.colors.map((color) => (
          color.num > 2 ?
            <Link to={{pathname: '/board', tubesClass: color.num }} key={color.id} onClick={()=>shuffleBalls(color.num)}  >
              <div className={`selection-ball color${color.num}`} >
                {color.num}
              </div>
            </Link> : null
        ))}
      </div>
    </div>
  );
}

export default Selection;