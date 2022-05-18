class Hello extends React.Component {
    render(){
        return (
        <div>
           <h1>Hello</h1>
           <h1>Hello</h1>
           <h1>Hello</h1> 
        </div>
        );
    }
}
ReactDOM.render(<Hello/>,document.getElementById('root'));

class World extends React.Component {
    render(){
        return <h1>World! {this.props.name}</h1>
    }
}
ReactDOM.render(<World/>,document.getElementById('root1'));

class Todo extends React.Component {
    render(){
        return (
        <div>
            <ol>
                <li>DSA</li>
                <li>APTITUDE</li>
                <li>ACADEMICS</li>
                <li>STOCK MARKET</li>
            </ol> 
            <h1>DSA</h1>
            <h1>CNS</h1>
        </div>
        );
    }
}
ReactDOM.render(<Todo />, document.getElementById('root2'));