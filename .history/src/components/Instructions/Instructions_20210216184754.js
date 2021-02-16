import React from 'react';
import './Instructions.css';

const Instructions = (props) => {
  return ( 
    <div className={`instructions-container ${props.display}`}>
      <button className='close-instructions'>X</button>
      <h1>How to play?</h1>
      <ul>
        <li>Tap any tube to move the ball lie on top in the tube to another tube.</li>
        <li>The rule is that you can only move a ball on top of another ball if both of them have the same color.</li>
        <li>You can always move a ball to an empty tube.</li>
        <li>Try not to get stuck - but don’t worry, you can always restart the level at any time.</li>
      </ul>
    </div>
   );
}
 
export default Instructions;