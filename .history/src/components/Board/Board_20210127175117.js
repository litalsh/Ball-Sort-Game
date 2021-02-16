import React from 'react';
import './Board.css'


const Board = (props) => {

  return (
    <div className='board-container'>
      {props.location.quantProps.map((tube) => <div className='tube'>
        {tube.map((ball) =>
          <div className={`selection color${ball.num}`} key={ball.id} >
            {ball.num}
          </div>
        )}
      </div>)}
    </div>
  );
}

export default Board;

