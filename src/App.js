import React from 'react';
import './App.css';

function App() {

  const goToExternalUrl = (url) => {
    window.location.href = url;
  };

  return (
      <div className="App">
        <header className="App-header">
          <p>
            HI
          </p>
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => goToExternalUrl('https://swaplinkie.xyz/api/gateway/test')}>
              Go to swaplinkie API
            </button>
            <button onClick={() => goToExternalUrl('http://127.0.0.1:8000/gateway/test')}>
              Go to Local API
            </button>
          </div>
        </header>
      </div>
  );
}

export default App;
