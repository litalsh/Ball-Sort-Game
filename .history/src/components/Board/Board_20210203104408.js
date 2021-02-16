import React, { useContext } from 'react';
import Tube from '../Tube/Tube';
import './Board.css'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-dom-confetti';


import { ballsContext } from '../context/store';


const Board = () => {

  const { randomBalls, restartHandler, completed, undoHandler, undoCount } = useContext(ballsContext);

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
      <header className='header'>
        <Link to='/'><button className='header-controls' onClick={()=> location.reload()}>New game</button></Link>
        <button className='header-controls' onClick={()=>restartHandler()}>Restart</button>
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