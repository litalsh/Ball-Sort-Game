import React from 'react';

const Tube = (props) => {
  return ( 
    <div className='tube'>
        {tube.map((ball) =>
          <div className={`selection color${ball.num}`} key={ball.id} >
            {ball.num}
          </div>
        )}
      </div>
  );
}
 
export default Tube;