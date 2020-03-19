import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardContainer from './components/Card/CardContainer';

function App() {
  return (
    <div className="bg-light">
      <div className="container">
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
