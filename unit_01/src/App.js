import './App.css';
import App2 from './App2';
import List from './List';
import Table from './Table';
import Test from './Test';
import Aside from './Aside';
import Button from './Button';
import Range from './Range';
import Input from './Input';

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
        <p >My skillz:</p>
        <ol>
        {array.map(item => <li key={item}>{item}</li>)}
        </ol>
      </div>

      <List></List>
      <Table></Table>
      <Test f={123} g = {'ALex'} name = {name} surname ={surname}/>
      <div>
        <Aside />
      </div>

      <Button/>
      
      <Range maxRange={1000}/>
      <Range maxRange={300}/>


      <h3> Инпут для теста</h3>
      <Input/>
    </div>
  );
}

export default App;
