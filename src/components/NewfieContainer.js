import React, { Component } from 'react';
import Newfie from './Newfie.js';
import photo1 from '../img/img1.jpg';
import photo2 from '../img/img2.jpg';

//Will determine what order the images will be displayed in. Will have the logic for how the newfie images will be displayed.

class NewfieContainer extends Component {
// create a function that randomizes that order

  render() {
    return (
      <div className="NewfieContainer"> 
      NewfieContainer
      <Newfie photo={ photo1 } id="photo1" />
      <Newfie photo={ photo2 } id="photo2"/>

      </div>
    );
  }
}

export default NewfieContainer;
