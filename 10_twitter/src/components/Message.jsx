import '..App.css';

const MessageList = ({ name, message }) => {
  return (
    <ul className="message-list">
      {message.map((msg, index) => (
        <li key={index}>
          <strong>{name}</strong>
          <p>{msg}</p>
        </li>
      ))}
    </ul>
  );
}

export default MessageList;