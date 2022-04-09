import NavPanel from "./NavPanel";

function Aside () {

    const navigation1 = {
        title: 'Main navigation',
        links: [
            {text: 'Main', url: '/'},
            {text: 'About', url: '/about'},
            {text: 'Contacts', url: '/contacts'},
        ]
    }
    
    const topPages = {
        title: 'Top pages',
        links: [
            {text: 'Notebooks', url: '/cat/notebooks'},
            {text: 'iPads', url: '/cat/ipads'},
            {text: 'Phone', url: '/cat/phones'}
        ]
    }
    
    const lastComments = {
        title: 'Last Comments', 
        links: [
            {text: 'sometext', url: '/comment/1'},
            {text: 'sometext1', url: '/comment/2'},
            {text: 'sometext2', url: '/comment/3'},
        ]
    }


    return (
        <>
        <NavPanel data = {navigation1} />
        </>
    )
}

export default Aside;