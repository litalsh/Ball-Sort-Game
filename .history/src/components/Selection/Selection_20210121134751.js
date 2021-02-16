import React from 'react';

const Selection = () => {
  const colors = [
    {num:1, color: '#CF6F85'},
    {num:2, color: '#963265'},
    {num:3, color: '#3B1433'},
    {num:4, color: '#2F2671'},
    {num:3, color: '#CF6F85'},
    {num:3, color: '#CF6F85'},
    {num:3, color: '#CF6F85'},
    {num:3, color: '#CF6F85'}, ]

  return ( 
    <div className='Selection-container'>
      <h3>How many colors?</h3>
      <div className='colors-selection'>

      </div>
    </div>
   );
}
 
export default Selection;