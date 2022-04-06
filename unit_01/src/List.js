function list () {

    const apples = 20;
    const oranges = 50;
    const bananas = 100;

    const list = (
        <ul>
            <li>Apples is {apples}</li>
            <li>Bananas is {bananas}</li>
            <li>Oranges is {oranges}</li>
            <li> Sum: {sum()}</li>
        </ul>
    )


    function sum() {
        return oranges + bananas + apples;
    }
    

    return (
        <div>
            Создание блокового элемента
            {list}
        </div>
    )
}


export default list;