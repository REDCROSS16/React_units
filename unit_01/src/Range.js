import {useState} from "react";

// компонент для вывода инпута range
function Range (props) {
    console.log('Компонент сработал');
    console.log(props)
    const [value, setValue] = useState(0);
    const [newValue, setNewValue] = useState(0);

    function inputHandler (event) {
        console.log('Функция сработала');
        setValue(event.target.value);
    }

    return (
        <> 
        {console.log('Return сработал')}
            <input type='range' value={value} onChange={inputHandler} max={props.maxRange}></input>
            <p> {value} </p>
        </>
    )
}

export default Range;