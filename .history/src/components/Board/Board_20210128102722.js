import React, {useContext} from 'react';
import Tube from '../Tube/Tube';
import './Board.css'
import { v4 as uuidv4 } from 'uuid';

import { ballsContext } from '../context/store';


const Board = (props) => {

  const {randomBalls} = useContext(ballsContext);

  return (
    <div className='board-container'>
      {randomBalls.map((tube) => <Tube balls={tube} key={uuidv4()} /> )}
    </div>
  );
}

export default Board;