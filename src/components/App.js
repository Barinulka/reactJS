import './App.scss';
import Message from './Message/Message';

function App() {
  let message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veniam ipsa dolores cumque error at adipisci, ipsam dolorum voluptatem magni!';
  return (
    <div className="App center">
      <Message text={message} title="Lorem title" />
    </div>
  );
}



export default App;
