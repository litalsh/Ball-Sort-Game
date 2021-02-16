import React, { useContext } from 'react';
import Ball from '../Ball/Ball';
import { v4 as uuidv4 } from 'uuid';
import {motion} from 'framer-motion';

import './Tube.css'
import { ballsContext } from '../context/store';

const Tube = (props) => {
  const { moveBallHandler } = useContext(ballsContext);

  return (
    <motion.div className='tube' onClick={() => moveBallHandler(props.index)} layout >
      {props.balls.map((ball) =>
        ball !== undefined ? <Ball content={ball} key={uuidv4()} tubeArray={props.balls} tubeIndex={props.index} /> : null
      )}
    </motion.div>
  );
}

export default Tube;

