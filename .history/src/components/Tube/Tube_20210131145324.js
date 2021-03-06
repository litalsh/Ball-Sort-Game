import React from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'



const Tube = (props) => {


  return (
    <div className='tube'>
      {props.balls.map((ball, index) =>
        ball !== undefined ? <Ball content={ball} key={uuidv4()} tubeArray={props.balls} index={index} /> : null
      )}
    </div>
  );
}

export default Tube;

