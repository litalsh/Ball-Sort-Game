import React, { useState, useContext } from 'react';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';
import { ballsContext } from '../context/store';



const Ball = (props) => {
  const {randomBalls, setRandomBalls} = useContext(ballsContext);

  const moveBallHandler = (tube) => {
    let tempRandomBalls = [...randomBalls];
    tempRandomBalls[tube][tempRandomBalls[tube].length-1].class ? delete tempRandomBalls[tube][tempRandomBalls[tube].length-1].class :
    Object.assign(tempRandomBalls[tube][tempRandomBalls[tube].length-1], {class: 'chosen'});
    setRandomBalls(tempRandomBalls);
  }

  return ( 
    <div className={`ball color${props.content.num} ${props.content.class}`} key={props.content.id} onClick={() => moveBallHandler(props.tubeIndex)} >
            {props.content.num}
          </div>
   );
}
 
export default Ball;