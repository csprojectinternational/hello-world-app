import logo from './logo.svg';
import Textbox from './components/Textbox/Textbox';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          INTRODUCING PULSAR
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          A new artificial intelligence startup featuring deep machine learning, neural networks, and state of the art blockchain technologies to invest in non-fungible technologies,
          receiving a 4B Series C Valuation
        </a>
        <Textbox />
      </header>
    </div>
  );
}

export default App;
