import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from '../../hooks/useLocalStorage';

export const ballsContext = createContext();

const BallsContextProvider = (props) => {

  const [randomBalls, setRandomBalls] = useState();
  const [movedBall, setMovedBall] = useState(null);
  const [completed, setComplited] = useState(false);
  const [initialRandomBalls, setInitialRandomBalls] =  useState();
  const [undoCount, setUndoCount] = useState(5);
  const [undoMoves, setUndoMoves] = useState([]);


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
    let emptyTubes = new Array([], []);
    let shuffled = [];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    while (array.length) {
      shuffled.push(array.splice(0, 4))
    }
    let temp = shuffled.concat(emptyTubes);
    setRandomBalls(temp);
    makeRandomBallsCopy(temp)
    // setInitialRandomBalls([...temp]);
    // console.log('rand',randomBalls, 'init',initialRandomBalls)
  }

  const makeRandomBallsCopy = (random) => {
    let temp = [...random];
    setInitialRandomBalls([...temp]);
    console.log('first init', initialRandomBalls)
  }

 
  // Select a ball 
  const chooseBallHandler = (index) => {
    let tempRandomBalls = [...randomBalls];
    setMovedBall(Object.assign(tempRandomBalls[index][tempRandomBalls[index].length - 1], { index: index }));
    Object.assign(tempRandomBalls[index][tempRandomBalls[index].length - 1], { class: 'chosen' });
    setRandomBalls(tempRandomBalls);
    console.log('added');
  }

  // Deselect a ball
  const rmChosenBallHandler = (index) => {
    let tempRandomBalls = [...randomBalls];
    delete tempRandomBalls[index][tempRandomBalls[index].length - 1].class;
    setRandomBalls(tempRandomBalls);
    setMovedBall(null);
    console.log('removed');
  }

  // Move ball to a different tube
  const changeTubeHandler = (index) => {
    let tempRandomBalls = [...randomBalls];
    delete tempRandomBalls[movedBall.index][tempRandomBalls[movedBall.index].length - 1].class;
    tempRandomBalls[index].push(tempRandomBalls[movedBall.index][tempRandomBalls[movedBall.index].length - 1]);
    tempRandomBalls[movedBall.index].splice(tempRandomBalls[movedBall.index].length - 1, 1);
    setRandomBalls(tempRandomBalls);
    setMovedBall(null);
    console.log('moved');
    movesHistory(movedBall.index, index);
    didWinHandler();
  }

  // Save moves for the undo
  const movesHistory = (oldIndex, newIndex) => {
      let tempUndoMoves = [...undoMoves];
    tempUndoMoves.push({oldIndex, newIndex});
    if(tempUndoMoves.length > undoCount) {
      tempUndoMoves.splice(0,tempUndoMoves.length - undoCount);
    }
    setUndoMoves(tempUndoMoves);
    console.log(undoMoves)
  }

  const undoHandler = () => {
    if(undoMoves.length === 0) {
      return
    };
    if (undoCount === 0){
      return
    } else {
      setUndoCount(undoCount-1);
      let tempRandomBalls = [...randomBalls];
      console.log('undoMoves', undoMoves)
      let undoItem = tempRandomBalls[undoMoves[undoMoves.length-1].newIndex].pop();
      console.log('undoItem',undoItem);
      tempRandomBalls[undoMoves[undoMoves.length-1].oldIndex].push(undoItem);
      setRandomBalls(tempRandomBalls);
      let tempUndoMoves = [...undoMoves];
      tempUndoMoves.pop();
      setUndoMoves(tempUndoMoves);
      console.log(undoCount)
    }
  }

  // Check winning condition
  const didWinHandler = () => {
    let didWin;
    for (let i = 0; i < randomBalls.length; i++) {
      if (didWin === false) {
        console.log('didWin is false')
        break;
      };
      if(randomBalls[i].length !== 0 && randomBalls[i].length < 4){console.log('less than 4', randomBalls, i); didWin = false};
      
      if (randomBalls[i].length > 0 && randomBalls[i].length === 4) {
        for (let j = 1; j < randomBalls[i].length; j++) {
          if (randomBalls[i][j].num === randomBalls[i][j - 1].num) {
            didWin = true;
            console.log('equal to previous')
          } else {
            didWin = false;
            console.log('not equal to previous')
            console.log('break')
            break;
          }
        }
      }
      console.log(randomBalls)
    }
    return setComplited(didWin);
  }

  // Clicked ball handler
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
        } else if (movedBall.num !== randomBalls[tube][randomBalls[tube].length - 1].num) {
          rmChosenBallHandler(movedBall.index);
          chooseBallHandler(tube);
        };
    }
  }

  const restartHandler = () => {
    let temp = [...initialRandomBalls]
    setRandomBalls(temp);
    console.log('init', initialRandomBalls, 'rand', randomBalls)
  }

  return (
    <ballsContext.Provider value={
      {
        shuffleBalls,
        randomBalls,
        setRandomBalls,
        moveBallHandler,
        completed,
        undoHandler,
        undoCount,
        initialRandomBalls,
        setInitialRandomBalls,
        restartHandler
      }
    }>
      {props.children}
    </ballsContext.Provider>
  );
}

export default BallsContextProvider;