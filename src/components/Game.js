import React, { Component } from 'react';

//direcetly responsible for displaying the score. 

class Game extends Component {
  render() {
    return (
      <div className="Game"> 
      Game 
      Score: { this.props.printScore } 
      </div>
    );
  }
}

export default Game;
