import React, { useContext } from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'
import { ballsContext } from '../context/store';




const Tube = (props) => {
  const { moveBallHandler, completed } = useContext(ballsContext);



  return (
    <div className='tube' onClick={() => moveBallHandler(props.index)} >
      <Confetti active={ props.completed } config={ config }/>
      {props.balls.map((ball) =>
        ball !== undefined ? <Ball content={ball} key={uuidv4()} tubeArray={props.balls} tubeIndex={props.index} completed={completed} /> : null
      )}
    </div>
  );
}

export default Tube;

