import React, {useContext} from 'react';
import Tube from '../Tube/Tube';
import './Board.css'
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-dom-confetti';


import { ballsContext } from '../context/store';


const Board = () => {

  const {randomBalls, completed} = useContext(ballsContext);

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
    <div className='board-container'>
      {completed ? <Confetti active={ completed } config={ config }/> : null}
      {randomBalls !== undefined ? randomBalls.map((tube, index) => tube !== undefined ? <Tube balls={tube} key={uuidv4()} index={index} /> : <div className='tube'></div> ) : console.log(randomBalls)}
    </div>
  );
}

export default Board;