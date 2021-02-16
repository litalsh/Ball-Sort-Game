import React from 'react';
import '../../App.css';
import '../Selection/Selection.css'

const Ball = (props) => {
  return ( 
    <div className={`selection color${props.ball.num}`} key={props.ball.id} >
            {props.num}
          </div>
   );
}
 
export default Ball;