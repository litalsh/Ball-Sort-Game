import React, { useState, useContext } from 'react';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';
import { ballsContext } from '../context/store';



const Ball = (props) => {
  const {randomBalls, setRandomBalls} = useContext(ballsContext);

  

  return ( 
    <div className={`ball color${props.content.num} ${props.content.class}`} key={props.content.id} onClick={props.move(props.tubeIndex)} >
            {props.content.num}
          </div>
   );
}
 
export default Ball;