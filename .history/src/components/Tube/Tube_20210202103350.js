import React, { useContext } from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'
import { ballsContext } from '../context/store';




const Tube = (props) => {
  const { moveBallHandler, completed } = useContext(ballsContext);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

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
