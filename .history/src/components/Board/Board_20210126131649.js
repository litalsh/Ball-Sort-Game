import React from 'react';

const Board = (props) => {
  let randomArr = [];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const randomized = (amount) => {
    for (let i = 0; i < amount; i++) {
      for (let j = 0; j < 4; j++) {
        randomArr.push(props.colors[i])
      }
    }
    shuffleArray(randomArr);
  }
  randomized(props.location.quantProps);

  return (
    <div className='board-container'>
      {randomArr.map((ball)=> <div className={`selection color${ball.num}`} key={ball.id}>{ball.num}</div>)}
      {console.log(randomArr)}
      {console.log(randomArr)}
    </div>
  );
}

export default Board;