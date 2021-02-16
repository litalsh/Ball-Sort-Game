import React, {useContext} from 'react';
import Tube from '../Tube/Tube';
import './Board.css'
import { v4 as uuidv4 } from 'uuid';

import { ballsContext } from '../context/store';


const Board = () => {

  const {randomBalls} = useContext(ballsContext);

  return (
    <div className='board-container'>
      {randomBalls !== undefined ? randomBalls.map((tube, index) => tube !== undefined ? <Tube balls={tube} key={uuidv4()} index={index} /> : <div className='tube'></div> ) : console.log(randomBalls)}
    </div>
  );
}

export default Board;