import {useState} from 'react';

function Input () {
    const [a, setA] = useState(0); // определили начальное значение и тип
    const [b, setB] = useState(0); // определили начальное значение и тип

    const formHandler = (event) => {
        event.preventDefault();
        setA(event.target.elements.num1.value);
        setB(event.target.elements.num2.value);
    } 

 return (
  <div className="App">
    <form onSubmit={formHandler}>
        <input type="number" name ="num1" defaultValue={a}/>
        <input type="number" name ="num2" defaultValue={b} />
        <input type="submit" value = "Sum" />
    </form>
    <div className ="out">{a + b}</div>
  </div>
 );
}

export default Input;