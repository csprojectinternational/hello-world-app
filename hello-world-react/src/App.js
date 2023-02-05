import logo from './logo.svg';
import Textbox from './components/Textbox/Textbox';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Woooo Pranav the Ghost was hereeeee 👻
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Damn that's a pretty cool ghost! 😱
        </a>
        <Textbox />
      </header>
    </div>
  );
}

export default App;
