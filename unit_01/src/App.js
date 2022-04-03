import logo from './logo.svg';
import './App.css';
import App2 from './App2';

function App() {

  const name = 'Alexander';
  const surname = 'Podolnitskiy';
  const array = ['PHP', 'JS', 'HTML', 'CSS'];

  return (
    <div className="App">

      <div>
        <App2></App2>
        {/* <App2/> */}
      </div>
      <header className="App-header">
        <p> My name is {`[ ${name} ${surname} ]`}</p>
      </header>

      <div>
        <p>My skillz:</p>
        {array.map(item =>  item + ' ')}
      </div>

      
    </div>
  );
}

export default App;
