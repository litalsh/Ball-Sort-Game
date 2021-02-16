import React, { createContext } from 'react';
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
  
  let randomBalls;

  const shuffle = (array) => {
    let emptyTubes = new Array(2).fill([]);
    let shuffled= [];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    while (array.length) {
      shuffled.push(array.splice(0, 4))
      randomBalls = shuffled.concat(emptyTubes);
    }
    console.log('inside shuffle', randomBalls)
  }


  const shuffleBalls = (amount) => {
    let arr = [];
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < 4; j++) {
        arr.push({ num: i, id: uuidv4() })
      }
    }
    shuffle(arr);
  }

  return ( 
    <ballsContext.Provider value={
      {
        shuffleBalls,
        randomBalls
      }
    }>
      {props.children}
    </ballsContext.Provider>
   );
}
 
export default BallsContextProvider;