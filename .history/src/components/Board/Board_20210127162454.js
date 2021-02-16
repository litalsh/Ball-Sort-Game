import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Board.css'


const Board = (props) => {
  
  
  return (
    <div className='board-container'>
      {props.location.quantProps.map((ball) => <div className='tube'>
        {ball.map((subBall) =>
          <div className={`selection color${subBall.num}`} key={subBall.id} onClick={() => console.log('sub',subBall, 'randomArr',props.location.quantProps)}>
            {subBall.num}{console.log('ball',subBall)}
          </div>
        )}
      </div>)}
      {console.log('outside ',props.location.quantProps)}
    </div>
  );
}

export default Board;

