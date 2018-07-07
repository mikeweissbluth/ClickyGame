import React, { Component } from 'react';
import NewfieContainer from './NewfieContainer';

//direcetly responsible for displaying the score. and indirectly rendering the images that will be displayed (we won't put image tags inthis component.) 

class Game extends Component {
  render() {
    return (
      <div className="Game"> 
      Game
      <NewfieContainer />
      </div>
    );
  }
}

export default Game;
