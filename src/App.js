
import './App.scss';
import React, { useState, useEffect } from "react";

function App() {

  const [gameOn, setGameOn] = useState(false);
  const [flashPhase, setFlashPhase] = useState(false);

  function startGameHandle(){
    setGameOn(true);
  };


  useEffect(() => {
    if(gameOn) {
      console.log('Game On!');
      setFlashPhase(true);
    } else {
      console.log('Game Off!');
    }
  }, [gameOn]);

  useEffect(()=>{
    if(gameOn && flashPhase){
      //flash color sequence
    }
  },[gameOn, flashPhase]);

  return (
    <div className="App">

      <header className="App-header">
      <h1>Simon Says Game</h1>
      
      <div className="container">
        <div className="colorCards green"></div>
        <div className="colorCards red"></div>
        <div className="colorCards orange"></div>
        <div className="colorCards blue"></div>
        <div className="startButton" onClick={startGameHandle}>START</div>
     </div>
      </header>

    </div>
  ); 
}

export default App;
