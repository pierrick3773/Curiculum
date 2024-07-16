
import Header from './assets/component/header';
import Socialicons from './assets/component/follow';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Socialicons />
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="contenu">
          <img className="logo" src="/unnamed.jpg" alt="Avatar" />
        </div>
      </div>
    </>
  );
}

export default App;
