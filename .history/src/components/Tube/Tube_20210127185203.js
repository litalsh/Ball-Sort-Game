import React from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';



const Tube = (props) => {


  return ( 
    <div className='tube' key={uuidv4()}>
        {props.balls.map((ball) => <Ball content={ball}  />
          
        )}
      </div>
  );
}
 
export default Tube;

