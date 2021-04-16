
import './App.scss';
import React, { useState, useEffect } from "react";

function App() {

  const [gameOn, setGameOn] = useState(false);
  const [flashMode, setFlashMode] = useState(false);
  const [colorArray, setColorArray] = useState([]);


  let arrayOfColors = ['green', 'red', 'oramge', 'blue'];

  function startGameHandle(){
    setGameOn(true);
  };


  function generateRandomColor(){
    return arrayOfColors[Math.floor(Math.random() * 4)];
  };


  useEffect(() => {
    if(gameOn) {
      console.log('Game On!');
      setFlashMode(true);
    } else {
      console.log('Game Off!');
    }
  }, [gameOn]);


  useEffect(()=>{
    if(gameOn && flashMode){
      //flash color sequence
      console.log('Flash is on!');
      
    }
  },[gameOn, flashMode]);

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
