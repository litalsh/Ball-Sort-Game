import React, { useContext } from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'
import { ballsContext } from '../context/store';




const Tube = (props) => {
  const { moveBallHandler } = useContext(ballsContext);



  return (
    <div className='tube' onClick={() => moveBallHandler(props.index)} >
      {props.balls.map((ball) =>
        ball !== undefined ? <Ball content={ball} key={uuidv4()} tubeArray={props.balls} tubeIndex={props.index} /> : null
      )}
    </div>
  );
}

export default Tube;

