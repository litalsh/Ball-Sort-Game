import './App.css';
import Selection from './components/Selection/Selection'

function App() {

  const colors = [
    {num:1, id: uuid()},
    {num:2, color: '#963265'},
    {num:3, color: '#3B1433'},
    {num:4, color: '#2F2671'},
    {num:5, color: '#2F7A8D'},
    {num:6, color: '#69CDCB'},
    {num:7, color: '#81D37C'},
    {num:8, color: '#D0C871'} 
  ];


  return (
    <div className="App">
      <Selection quantity={colors} />
    </div>
  );
}

export default App;
