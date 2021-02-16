import React, { useState, useContext } from 'react';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';
import { ballsContext } from '../context/store';



const Ball = (props) => {
  const {randomBalls} = useContext(ballsContext);

  const [isChosen, setIsChosen] = useState(false);

  const moveBallHandler = (id) => {
    const ballIndex = props.tubeArray.findIndex(ball => {
      return ball.id === id;
    })
    isChosen === false ? setIsChosen(true) : setIsChosen(false);
    console.log(randomBalls[props.index],props.index, ballIndex);
  }

  return ( 
    <div className={`ball color${props.content.num} ${isChosen ? 'chosen' : null}`} key={props.content.id} onClick={() => moveBallHandler(props.content.id)} >
            {props.content.num}
          </div>
   );
}
 
export default Ball;