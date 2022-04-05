// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const redColor = 'red';

    const styles = {
        fontWeight: 'bold', 
        color: 'orange',
        textTransform: 'uppercase'
    }

    const active = 'active';
    const enable = false;

    return  (
        <div className={enable ? active: 'hide'} style={styles}>Hello</div>
    );
}