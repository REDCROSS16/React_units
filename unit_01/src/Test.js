function Test (props) {

    console.log(props)
    return (
        <>
            <p> Вывод props: </p>
            <p> my name {props.name} </p>
            <p> my surname {props.surname} </p>
        </>
    )
}

export default Test;