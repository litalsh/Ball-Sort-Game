import React from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'



const Tube = (props) => {

  const clickHandler = (index) => {
    props.balls[props.index][props.balls[props.index].length-1]
  }

  return (
    <div className='tube' >
      {props.balls.map((ball) =>
        ball !== undefined ? <Ball content={ball} key={uuidv4()} tubeArray={props.balls} index={props.index} /> : null
      )}
    </div>
  );
}

export default Tube;

