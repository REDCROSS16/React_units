import {useState} from "react";

// компонент для вывода инпута range
function Range (props) {

    console.log(props)
    const [value, setValue] = useState(0);

    function inputHandler (event) {
        setValue(event.target.value);
    }

    return (
        <>
            <input type='range' value={value} onChange={inputHandler} max={props.maxRange}></input>
            <p> {value} </p>
        </>
    )
}

export default Range;