import React from 'react';
import './Selection.css'
import { Link } from 'react-router-dom';

const Selection = (props) => {
  let randomArr = [];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    while (array.length) {
      randomArr.push(array.splice(0, 4))
    }
    console.log('inside shuffle', randomArr)
  }

  const randomized = (amount) => {
    let arr = [];
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < 4; j++) {
        arr.push({ num: i, id: uuidv4() })
      }
    }
    shuffleArray(arr);
  }
  
  return (
    <div className='selection-container'>
      <h3>How many colors?</h3>
      <div className='selections'>
        {props.colors.map((color) => (
          color.num > 2 ?
            <Link to={{pathname:'/board', quantProps: randomArr}} key={color.id} onClick={()=>randomized(color.num)} >
              <div className={`selection color${color.num}`} >
                {color.num}
              </div>
            </Link> : null
        ))}
      </div>
    </div>
  );
}

export default Selection;