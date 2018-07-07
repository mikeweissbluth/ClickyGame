import React, { Component } from 'react';

//we need to create a newfie image property

class Newfie extends Component {
  handleClick= (e) => {
    console.log(e.target.id);
  }
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
