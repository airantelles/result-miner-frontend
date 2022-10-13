import logo from './img/logo.jpg';
import Report from './components/Report/Report'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div class="navbar bg-base-100 result-miner-navbar">
          <img src={logo} class="result-miner-logo" />
          <label class="font-sans">Relatórios</label>
        </div>
      </header>
      <body>
        <Report></Report>
      </body>
    </div>
  );
}

export default App;
