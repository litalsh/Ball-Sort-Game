import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export const ballsContext = createContext();


const BallsContextProvider = (props) => {

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
    let emptyTubes = new Array([],[]);
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


  const chooseBallHandler = (index) => {
    let tempRandomBalls = [...randomBalls];
    setMovedBall(Object.assign(tempRandomBalls[index][tempRandomBalls[index].length - 1], { index: index }));
    Object.assign(tempRandomBalls[index][tempRandomBalls[index].length - 1], { class: 'chosen' });
    setRandomBalls(tempRandomBalls);
    console.log('added');
  }

  const rmChosenBallHandler = (index) => {
    let tempRandomBalls = [...randomBalls];
    delete tempRandomBalls[index][tempRandomBalls[index].length - 1].class;
    setRandomBalls(tempRandomBalls);
    setMovedBall(null);
    console.log('removed');
  }

  const changeTubeHandler = (index) => {
    let tempRandomBalls = [...randomBalls];
    delete tempRandomBalls[movedBall.index][tempRandomBalls[movedBall.index].length - 1].class;
    tempRandomBalls[index].push(tempRandomBalls[movedBall.index][tempRandomBalls[movedBall.index].length - 1]);
    tempRandomBalls[movedBall.index].splice(tempRandomBalls[movedBall.index].length - 1, 1);
    setRandomBalls(tempRandomBalls);
    setMovedBall(null);
    console.log('moved');
  }

  const didWinHandler = () => {
    for (let i = 0; i < randomBalls.length; i++){
      if(randomBalls[i].length > 0){
        for (let j = 1; j < randomBalls[i].length; j++){
          if(randomBalls[i][j] !== randomBalls[i][j-1]) {
            break;
          }
        }
      }
    }
  }

  const moveBallHandler = (tube) => {
    console.log(movedBall)
    if (randomBalls[tube].length < 1 && movedBall === null) { return };

    if (movedBall === null) {
      chooseBallHandler(tube);
    };

    if (movedBall !== null) {
      if (tube === movedBall.index) {
        rmChosenBallHandler(tube);
      }
      else if (randomBalls[tube].length === 4) {
        rmChosenBallHandler(movedBall.index);
        chooseBallHandler(tube);
      } else
      if (randomBalls[tube].length < 1) {
        changeTubeHandler(tube);
      } else if (movedBall.num === randomBalls[tube][randomBalls[tube].length - 1].num && randomBalls[tube].length !== 4) {
        changeTubeHandler(tube);
      } else if(movedBall.num !== randomBalls[tube][randomBalls[tube].length - 1].num) {
        rmChosenBallHandler(movedBall.index);
        chooseBallHandler(tube);
      };
    }
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