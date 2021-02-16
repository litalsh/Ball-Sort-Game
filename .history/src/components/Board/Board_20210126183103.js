import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Board.css'


const Board = (props) => {
  let randomArr = [];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    while(array.length){
      randomArr.push(array.splice(0,4))
    }
  }

  const randomized = (amount) => {
    let arr = [];
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < 4; j++) {
        arr.push({num: i, id: uuidv4()})
      }
    }
    shuffleArray(randomArr);
  }
  randomized(props.location.quantProps);

  return (
    <div className='board-container'>
      {randomArr.map((ball)=> <div className={`selection color${ball.num}`} key={ball.id} onClick={() => console.log(ball, randomArr)}>{ball.num}{console.log(ball)}</div>)}
      {console.log(randomArr)}
    </div>
  );
}

export default Board;