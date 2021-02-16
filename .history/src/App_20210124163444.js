import './App.css';
import Selection from './components/Selection/Selection'

function App() {

  const colors = [
    {num:1, color: '#CF6F85', class: 'one'},
    {num:2, color: '#963265', class: 'two'},
    {num:3, color: '#3B1433', class: 'three'},
    {num:4, color: '#2F2671', class: 'four'},
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
