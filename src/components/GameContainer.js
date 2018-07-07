import React, { Component } from 'react';
import Game from './Game.js';
import images from '../imgs.json'

//render the actual UI of the game. Does this by rendering the game component. Calculate the score and send the info to 'gamecomponent' to be displayed.

class GameContainer extends Component {
  // write out the state object
  state = {
    selected: []
  }
//when this function is called it will change the state to add the currently selected image to the state

  imageSelected=(imageID) => {
    let currentlySelected=this.state.selected;
    currentlySelected.push(imageID);
    this.setState({
      selected: currentlySelected
    })
  }

  render() {
    return (
      <div className="GameContainer"> 
      GameContainer
      <Game />
      </div>
    );
  }
}

export default GameContainer;
