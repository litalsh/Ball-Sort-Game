import React from 'react';
import '../../App.css';
import '../Selection/Selection.css'

const Ball = (props) => {
  return ( 
    <div className={`selection color${props.content.num}`} key={props.content.id} >
            {props.content.num}
          </div>
   );
}
 
export default Ball;