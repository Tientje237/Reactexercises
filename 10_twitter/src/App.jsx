import './App.css';
import { useState } from 'react';
import CreateMessage from './components/CreateMessage';
import MessageList from './components/MessageList';

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);

  let name = "Tino";

  return (
    <div className="App">
      <h1>Twitter</h1>
      <CreateMessage 
        textInput={textInput} 
        setTextInput={setTextInput} 
        message={message} 
        setMessage={setMessage} 
      />
      <MessageList name={name} message={message} />
    </div>
  );
}

export default App;
