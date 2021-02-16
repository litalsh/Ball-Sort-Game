import React from 'react';
import '../../App.css';
import '../Selection/Selection.css'

const Ball = (props) => {
  return ( 
    props.content !== undefined ? <div className={`ball color${props.content.num}`} key={props.content.id} >
            {props.content.num}
          </div> : null
   );
}
 
export default Ball;