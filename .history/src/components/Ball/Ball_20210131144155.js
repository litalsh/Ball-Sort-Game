import React, { useState } from 'react';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';

const Ball = (props) => {
  const [isChosen, setIsChosen] = useState(false);

  const moveBallHandler = (id) => {
    const taskIndex = stack.findIndex(task => {
      return task.id === id;
    })
    isChosen === false ? setIsChosen(true) : setIsChosen(false);

  }

  return ( 
    <div className={`ball color${props.content.num} ${isChosen ? 'chosen' : null}`} key={props.content.id} onClick={() => moveBallHandler(porps.content.id)} >
            {props.content.num}
          </div>
   );
}
 
export default Ball;