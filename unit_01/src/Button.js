import {useState} from 'react';

// Модуль кнопки
function Button () {
    const [count, setCount] = useState(1);

    // функция для подсчета кликов
    const buttonCount = () => {
        let temp = count;
        temp++;
        setCount(temp);
    }

    return (
        <div>
            <button onClick={buttonCount}> Click </button>
            <p>{count}</p>
        </div>
    )
}

export default Button;