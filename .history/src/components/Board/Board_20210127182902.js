import React from 'react';
import Tube from '../Tube/Tube';
import './Board.css'
import { ballsContext } from '../context/store';


const Board = (props) => {

  const {randomBalls} = useContext(ballsContext);

  return (
    <div className='board-container'>
      {randomBalls.map((tube) =><Tube balls={props.location.quantProps} /> )}
    </div>
  );
}

export default Board;

<div className='tube'>
        {tube.map((ball) =>
          <div className={`selection color${ball.num}`} key={ball.id} >
            {ball.num}
          </div>
        )}
      </div>