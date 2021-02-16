import React, { useState, useContext } from 'react';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';
import { ballsContext } from '../context/store';



const Ball = (props) => {
  // const {randomBalls, setRandomBalls, moveBallHandler} = useContext(ballsContext);

  return ( 
    <div className={`ball color${props.content.num} ${props.content.class}`} key={props.content.id} >
            {props.content.num}
          </div>
   );
}
 
export default Ball;