import React, { useState, useContext } from 'react';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';
import { ballsContext } from '../context/store';



const Ball = (props) => {
  const {randomBalls, setRandomBalls} = useContext(ballsContext);

  const [isChosen, setIsChosen] = useState(false);

  const moveBallHandler = (tube) => {
    // const ballIndex = props.tubeArray.findIndex(ball => {
    //   return ball.id === id;
    // })
    // isChosen === false ? setIsChosen(true) : setIsChosen(false);
    // console.log(randomBalls[props.tubeIndex],'props.index',props.tubeIndex, ballIndex);
    let tempRandomBalls = [...randomBalls];
    tempRandomBalls[tube][tempRandomBalls[tube].length-1].class ? 
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