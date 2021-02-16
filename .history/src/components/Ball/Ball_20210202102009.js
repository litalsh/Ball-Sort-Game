import React from 'react';
import Confetti from 'react-dom-confetti';

import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';

const Ball = (props) => {
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  return ( 
    <div className={`ball color${props.content.num} ${props.content.class}`} key={props.content.id} >
      <Confetti active={ someProp } config={ config }/>
          </div>
   );
}
 
export default Ball;
