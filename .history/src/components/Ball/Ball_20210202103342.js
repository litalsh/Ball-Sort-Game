import React from 'react';
import Confetti from 'react-dom-confetti';

import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';

const Ball = (props) => {

  return ( 
    <div className={`ball color${props.content.num} ${props.content.class}`} key={props.content.id} >
          </div>
   );
}
 
export default Ball;
