import React from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'



const Tube = (props) => {


  return (
    <div className='tube'>
      {props.balls.length !== 0 ?
        props.balls.map((ball) =>
          <Ball content={ball} key={uuidv4()} />
        ) : null}
    </div>
  );
}

export default Tube;

