import React, { useState } from 'react';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';

const Ball = (props) => {
  const [isChosen, setIsChosen] = useState(false);

  return ( 
    <div className={`ball color${props.content.num} ${isChosen ? 'chosen' : null}`} key={props.content.id} >
            {props.content.num}
          </div>
   );
}
 
export default Ball;