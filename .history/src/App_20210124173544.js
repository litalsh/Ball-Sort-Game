import './App.css';
import Selection from './components/Selection/Selection'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const colors = [
    {num:1, id: uuidv4()},
    {num:2, id: uuidv4()},
    {num:3, id: uuidv4()},
    {num:4, id: uuidv4()},
    {num:5, id: uuidv4()},
    {num:6, id: uuidv4()},
    {num:7, id: uuidv4()},
    {num:8, id: uuidv4()} 
  ];


  return (
    <div className="App">
      <Selection quantity={colors.num} key={colors.id} />
    </div>
  );
}

export default App;
