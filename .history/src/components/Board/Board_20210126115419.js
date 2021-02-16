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
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < 4; j++) {
        randomArr.push(i)
      }
    }
    shuffleArray(randomArr);
  }
  randomized(props.quantity);

  return (
    <div className='board-container'>
      {randomArr}
      {console.log(props.quantity)}
    </div>
  );
}

export default Board;