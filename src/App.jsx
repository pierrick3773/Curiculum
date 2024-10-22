
import Header from './assets/component/header';
import Socialicons from './assets/component/follow';
import MyComponent from './assets/component/modal'
import Footer from './assets/component/footer'
import Construction from './assets/component/img_construction'

import './App.css';

function App() {
  return (
    <>
      <header>
      <Header />
      </header>
      <main>
      <Socialicons />
      <Construction/>
      <MyComponent />
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="contenu">
          <img className="logo" src="/unnamed.jpg" alt="Avatar" />
        </div>
      </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
