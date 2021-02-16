import React from 'react';
import Tube from '../Tube/Tube';
import './Board.css'


const Board = (props) => {

  const {shuffledBalls} = useContext(ballsContext);

  return (
    <div className='board-container'>
      {props.location.quantProps.map((tube) =><Tube balls={props.location.quantProps} /> )}
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