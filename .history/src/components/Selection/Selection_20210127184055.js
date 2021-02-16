import React, {useContext} from 'react';
import './Selection.css'
import { v4 as uuidv4 } from 'uuid';
import { ballsContext } from '../context/store';

import { Link } from 'react-router-dom';
import Board from '../Board/Board';

const Selection = (props) => {
  
  const {shuffleBalls} = useContext(ballsContext);
  
  return (
    <div className='selection-container'>
      <h3>How many colors?</h3>
      <div className='selections'>
        {props.colors.map((color) => (
          color.num > 2 ?
            <Link to='/board' key={color.id} onClick={()=>shuffleBalls(color.num)} >
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