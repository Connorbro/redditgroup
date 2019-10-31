import React from 'react';
// import logo from './logo.svg';

import first from './images/1.jpg';
import second from './images/2.jpg';
import third from './images/3.jpg';
import fourth from './images/4.jpg';
import fifth from './images/5.jpg';
import sixth from './images/6.jpg';
import Card from './Card';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className ="App">
        <div>
      <h3>Footballer news</h3>
      <div>
      <Card pic= {first} text ="Best player in the world"
      topic= "UNITED"
      />
      <Card pic ={second} text="Biggest football club in the world"
      topic="LEO MESSI"
      />
      <Card pic= {third} text="Best welsh player"
      topic="GB11"
      />
      </div>
  </div>
  <div>
  <h3>Other news</h3>
  <Card pic ={fourth} text="Matilda is one of the best films ever"
  topic="Matilda"/>
  <Card pic ={fifth} text="The worlds nicest flower"
  topic="Flower"/>
  <Card pic ={sixth} text="Ainsley is so funny"
  topic="mrharriot"/>
  </div>
</div>

        
    )
  }
}

export default App;
