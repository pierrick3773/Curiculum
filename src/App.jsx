import { useState, useEffect } from 'react';
import Loader from './assets/component/loader';
import './App.css';
import Header from './assets/component/header';
import { Socialicons } from './assets/component/follow';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}

      {!loading && (
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
      )}
    </>
  );
}

export default App;
