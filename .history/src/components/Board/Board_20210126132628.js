import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const Board = (props) => {
  let randomArr = [];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const randomized = (amount) => {
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < 4; j++) {
        randomArr.push({num: i, id: uuidv4()})
      }
    }
    shuffleArray(randomArr);
  }
  randomized(props.location.quantProps);

  return (
    <div className='board-container'>
      {randomArr.map((ball)=> <div className={`selection color${ball.num}`} key={ball.id} onClick={() => console.log(ball)}>{ball.num}</div>)}
      {console.log(randomArr)}
      {console.log(props.colors)}
    </div>
  );
}

export default Board;