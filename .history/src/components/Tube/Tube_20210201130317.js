import React from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import './Tube.css'



const Tube = (props) => {
  const {randomBalls, setRandomBalls} = useContext(ballsContext);

  const moveBallHandler = (tube) => {
    let tempRandomBalls = [...randomBalls];
    tempRandomBalls[tube][tempRandomBalls[tube].length-1].class ? delete tempRandomBalls[tube][tempRandomBalls[tube].length-1].class :
    Object.assign(tempRandomBalls[tube][tempRandomBalls[tube].length-1], {class: 'chosen'});
    setRandomBalls(tempRandomBalls);
  }

  return (
    <div className='tube' onClick={() => moveBallHandler(props.index)} >
      {props.balls.map((ball) =>
        ball !== undefined ? <Ball content={ball} key={uuidv4()} tubeArray={props.balls} tubeIndex={props.index} move={() => moveBallHandler(props.index)} /> : null
      )}
    </div>
  );
}

export default Tube;

