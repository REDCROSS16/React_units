// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const redColor = 'red';

    const head = <h1> This is a HEADER</h1>

    const styles = {
        fontWeight: 'bold', 
        color: 'orange',
        textTransform: 'uppercase'
    }

    const active = 'active';
    const enable = true;

    return  (
        <div className={enable ? active: 'hide'} style={styles}>Hello {head}</div>
    );
}