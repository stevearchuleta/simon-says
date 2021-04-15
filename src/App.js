
import './App.scss';
import {useState} from 'react';

function App() {



  return (
    <div className="App">

      <header className="App-header">
      <h1>Simon Says Game</h1>
      
      <div className="container">
        <div className="colorCards green"></div>
        <div className="colorCards red"></div>
        <div className="colorCards orange"></div>
        <div className="colorCards blue"></div>
        <div className="startButton start">START</div>
     </div>
      </header>

    </div>
  ); 
}

export default App;
