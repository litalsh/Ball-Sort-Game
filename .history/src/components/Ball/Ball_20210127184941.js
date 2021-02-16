import React from 'react';
import '../../App.css'

const Ball = (props) => {
  return ( 
    <div className={`selection color${props.num}`} key={props.id} >
            {props.num}
          </div>
   );
}
 
export default Ball;