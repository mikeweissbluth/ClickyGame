import React, { Component } from 'react';

//we need to create a newfie image property



class Newfie extends Component {
    //setting state to images imported. Initializing the state
    state = {
      isClicked: false,
      
    }

  handleClick= (e) => {
    //console.log(e.target.id);
    if (this.state.isClicked== true) {
      //checking the state to see if the image was previously clicked. The game should then reset.
      console.log('game should reset')
      this.props.resetGame();
      // triggerShuffle
      
    }else {
      //the game should award the user with a point (1) and reshuffle the images (2) and change the state of that image to true (3).
      this.props.triggerShuffle();
      this.setState(
         {
           isClicked: true,
         }
       );
    }
  } //below we return a div that has a img inside it.

  render() {
    return (
      <div className="Newfie"> 
      <img 
        src= { this.props.photo} 
        onClick={this.handleClick} 
        id={this.props.id}
      />
      </div>
    );
  }
}

export default Newfie;
