import React from 'react';
import './App.css';
import Selection from './components/Selection/Selection';
import Board from './components/Board/Board';
import { v4 as uuidv4 } from 'uuid';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import BallsContextProvider from './components/context/store';

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

  return (
    <BallsContextProvider>
      <MemoryRouter>
        <div className="App">
          <Switch>
            <Route exact path='/'
              render={(props) => <Selection colors={colors} {...props} />}
            />
            <Route exact path='/board'
              render={(props) => <Board colors={colors} {...props} />}
            />
          </Switch>
          <footer>© 2021 Created by Lital Shalom</footer>
        </div>
      </MemoryRouter>
    </BallsContextProvider>
  );
}

export default App;
