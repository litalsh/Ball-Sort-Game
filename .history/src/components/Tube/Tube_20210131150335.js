import React from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'



const Tube = (props) => {

  // const clickHandler = (index) => {
  //   props.balls[index][props.balls[index].length-1]
  // }

  return (
    <div className='tube' >
      {props.balls.map((ball, index) =>
        ball !== undefined ? <Ball content={ball} key={uuidv4()} tubeArray={props.balls} index={index} /> : null
      )}
    </div>
  );
}

export default Tube;

