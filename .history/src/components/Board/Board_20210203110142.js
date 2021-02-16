import React, { useContext } from 'react';
import Tube from '../Tube/Tube';
import './Board.css'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-dom-confetti';


import { ballsContext } from '../context/store';


const Board = () => {

  const { randomBalls, completed, undoHandler, undoCount, initialRandomBall, setRandomBalls } = useContext(ballsContext);

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

  const restartHandler = () => {
    let temp = [...initialRandomBall];
    setRandomBalls(temp);
  }

  return (
    <div className='board-container'>
      <header className='header'>
        <button className='header-controls' onClick={()=> window.location.reload(true)}>New game</button>
        <Link to='/board' onClick={()=>restartHandler()} ><button className='header-controls'>Restart</button></Link>
        <button className='header-controls' onClick={()=>undoHandler()}>Undo {undoCount}</button>
      </header>
      <Confetti active={completed} config={config} />
      <div className='tubes-container'>
        {randomBalls !== undefined ? randomBalls.map((tube, index) => tube !== undefined ? <Tube balls={tube} key={uuidv4()} index={index} /> : <div className='tube'></div>) : console.log(randomBalls)}
      </div>
    </div>
  );
}

export default Board;