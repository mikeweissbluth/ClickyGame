import React, { Component } from 'react';
import Game from './Game.js';
import NewfieContainer from './NewfieContainer.js';

//render the actual UI of the game. Does this by rendering the game component. Calculate the score and send the info to 'gamecomponent' to be displayed.

class GameContainer extends Component {
  // write out the state object
  state = {
    selected: [],
    score: 0,
  }


  increaseScore=() => {
     //add 1 to score
     this.setState({
       score: this.state.score + 1
     });
     console.log("score increased by one")
  }

  render() {
    return (
      <div className="GameContainer"> 
      GameContainer
      <Game printScore= {this.state.score}/>
      <NewfieContainer increasescore={this.increaseScore} />
      </div>
    );
  }
}

export default GameContainer;
