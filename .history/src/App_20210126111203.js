import './App.css';
import Selection from './components/Selection/Selection';
import Board from './components/Board/Board';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  const colors = [
    { num: 1, id: uuidv4() },
    { num: 2, id: uuidv4() },
    { num: 3, id: uuidv4() },
    { num: 4, id: uuidv4() },
    { num: 5, id: uuidv4() },
    { num: 6, id: uuidv4() },
    { num: 7, id: uuidv4() },
    { num: 8, id: uuidv4() }
  ];

  let quantity;

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/'
          render={() => <Selection colors={colors} />}
        />
        <Route exact path='/board'
          render={() => <Board quantity={quantity} colors={colors} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
