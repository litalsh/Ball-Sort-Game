import React from 'react';
import './Board.css'


const Board = (props) => {

  return (
    <div className='board-container'>
      {props.location.quantProps.map((ball) => <div className='tube'>
        {ball.map((subBall) =>
          <div className={`selection color${subBall.num}`} key={subBall.id} >
            {subBall.num}
          </div>
        )}
      </div>)}
    </div>
  );
}

export default Board;

