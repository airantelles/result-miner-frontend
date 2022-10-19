import logo from './img/logo.jpg';
import LeagueByLiveBotTip from './components/LeagueByLiveBotTip/LeagueByLiveBotTip'
import LeagueByPreMatchTip from './components/LeagueByPreMatchTip/LeagueByPreMatchTip'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <div className="navbar bg-base-100 result-miner-navbar">
          <img src={logo} className="result-miner-logo" />
        </div>
      </header>
      <div>
        <div className="flex">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold text-center mt-5">Dicas para over de gols no jogo (Ao vivo)</h1>
            <div className="artboard phone-1 mt-5 ml-10">
              <LeagueByLiveBotTip></LeagueByLiveBotTip>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold text-center mt-5">Dicas para ambas marcarem (Pré Jogo)</h1>
            <div className="artboard phone-1 mt-5 ml-10">
              <LeagueByPreMatchTip></LeagueByPreMatchTip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
