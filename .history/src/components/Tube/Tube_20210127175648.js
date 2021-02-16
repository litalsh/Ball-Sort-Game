import React from 'react';
import Ball from '../Ball/Ball';

const Tube = (props) => {
  return ( 
    <div className='tube'>
        {props.balls.map((ball) => <Ball  />
          
        )}
      </div>
  );
}
 
export default Tube;

<div className={`selection color${ball.num}`} key={ball.id} >
            {ball.num}
          </div>