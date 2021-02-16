import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export const ballsContext = createContext();


const BallsContextProvider = (props) => {

  // let randomBalls = [];

  // const shuffle = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   while (array.length) {
  //     randomBalls.push(array.splice(0, 4))
  //   }
  //   console.log('inside shuffle', randomBalls)
  // }

  const [randomBalls, setRandomBalls] = useState();
  const [movedBall, setMovedBall] = useState(null);

  // Create array of the correct length according to users` choice
  const shuffleBalls = (amount) => {
    let arr = [];
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < 4; j++) {
        arr.push({ num: i, id: uuidv4() })
      }
    }
    shuffle(arr);
  }

  // Shuffles the attay and adds two empty tubes
  const shuffle = (array) => {
    let emptyTubes = new Array(2).fill([]);
    let shuffled = [];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    while (array.length) {
      shuffled.push(array.splice(0, 4))
    }
    setRandomBalls(shuffled.concat(emptyTubes));
  }


  const moveBallHandler = (tube, parent) => {
    let tempRandomBalls = [...randomBalls];
    
    if(movedBall === null) {
      Object.assign(tempRandomBalls[tube][tempRandomBalls[tube].length-1], {class: 'chosen'});
    setRandomBalls(tempRandomBalls);
    setMovedBall(Object.assign(tempRandomBalls[tube][tempRandomBalls[tube].length-1], {tube}));
    console.log(movedBall)
    }
    tempRandomBalls[tube][tempRandomBalls[tube].length-1].class ? delete tempRandomBalls[tube][tempRandomBalls[tube].length-1].class :
    Object.assign(tempRandomBalls[tube][tempRandomBalls[tube].length-1], {class: 'chosen'});
    setRandomBalls(tempRandomBalls);
  }

  return (
    <ballsContext.Provider value={
      {
        shuffleBalls,
        randomBalls,
        setRandomBalls,
        moveBallHandler
      }
    }>
      {props.children}
    </ballsContext.Provider>
  );
}

export default BallsContextProvider;