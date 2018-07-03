import React, { Component } from 'react';
import Game from './Game.js';
import images from '../imgs.json'


class GameContainer extends Component {
  // write out the state object
  state= { images }
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
