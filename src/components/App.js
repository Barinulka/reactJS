import './App.scss';
import React, {useState, useEffect} from 'react';
// import Message from './Message/Message';

export const App = () => {
    console.log('render');

    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("did mount");
    }, []);



    return (
        <div className="App center">
            <span className="counter">{count}</span>
            <Child number={count} />
            <Button onClick={updateCount} />

        </div>
    );
}

function Button(props) {
    return (
        <div className="counter-button" onClick={props.onClick}>Click!</div>
    );
}

function Child(props) {
    return (
        <span>{props.count}</span>
    );
}



export default App;
