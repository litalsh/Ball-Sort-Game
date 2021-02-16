import React from 'react';
import Ball from '../Ball/Ball';


const Tube = (props) => {


  return ( 
    <div className='tube' key={uuidv4()}>
        {props.balls.map((ball) => <Ball content={ball}  />
          
        )}
      </div>
  );
}
 
export default Tube;

