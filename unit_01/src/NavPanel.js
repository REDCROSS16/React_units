function NavPanel (props) {
    
    return (
        <div className="navigation">
            <h4> {props.data.title}</h4>
            <ul>
                {props.data.links.map( item => <li key={item.text} >
                    <a href={item.url}> {item.text} </a>
                </li>)}
            </ul>
        </div>
    )
}

export default NavPanel;