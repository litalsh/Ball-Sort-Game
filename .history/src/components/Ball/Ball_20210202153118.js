import React from 'react';
import {motion} from 'framer-motion';
import '../../App.css';
import '../Selection/Selection.css';
import './Ball.css';

const Ball = (props) => {

  return ( 
    <motion.div className={`ball color${props.content.num} ${props.content.class}`} key={props.content.id} >
          </motion.div>
   );
}
 
export default Ball;
