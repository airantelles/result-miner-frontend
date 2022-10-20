import logo from './img/logo.jpg';
import LeagueByLiveBotTip from './components/LeagueByLiveBotTip/LeagueByLiveBotTip'
import LeagueByPreMatchTip from './components/LeagueByPreMatchTip/LeagueByPreMatchTip'
import './App.css';

function App() {
  return (
    <div>
      <div className="result-miner-navbar flex w-full">
        <img src={logo} className="result-miner-logo" />
      </div>
      <div className="md:flex md:ml-10">
        <div className="md:flex md:ml-12">
          <div className="md:ml-5">
            <h1 className="text-2xl font-bold text-center m-3">Dicas para over de gols no jogo (Ao vivo)</h1>
            <LeagueByLiveBotTip></LeagueByLiveBotTip>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:ml-5 md:ml-12">
            <h1 className="text-2xl font-bold text-center m-3">Dicas para ambas marcarem (Pré Jogo)</h1>
            <LeagueByPreMatchTip></LeagueByPreMatchTip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
