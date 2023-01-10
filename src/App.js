import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Components/Routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
