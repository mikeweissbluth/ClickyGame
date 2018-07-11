import React, { Component } from 'react';
import Newfie from './Newfie.js';
//import images from '../imgs.json';
import photo1 from '../img/img1.jpg';
import photo2 from '../img/img2.jpg';
import photo3 from '../img/img3.jpg';
import photo4 from '../img/img4.jpg';
import photo5 from '../img/img5.png';
import photo6 from '../img/img6.jpg';
import photo7 from '../img/img7.jpg';
import photo8 from '../img/img8.jpg';
import photo9 from '../img/img9.jpg';
import photo10 from '../img/img10.jpg';



//Will determine what order the images will be displayed in. Will have the logic for how the newfie images will be displayed.

//create an array
 //const photos=[photo1,photo2, ];

const images= [
  {
      "id": 1,
      "img": photo1
  },
  {
      "id": 2,
      "img": photo2
  },
  {
    "id": 3,
      "img": photo3
  },
  {
    "id": 4,
      "img": photo4
  },
  {
    "id": 5,
      "img": photo5
  },
  {
    "id": 6,
      "img": photo6
  },
  {
    "id": 7,
      "img": photo7
  },

]


 class NewfieContainer extends Component {
  //setting state to images imported. Initializing the state
  state = {
    images: images  
  }

// create a function that randomizes that order
// * Randomize array element order in-place.
// * Using Durstenfeld shuffle algorithm.
// */
shuffleArray = () => {
  var array = this.state.images;
   for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   } // following we need to give the user 1 point
   this.props.increasescore();



   console.log("shuffleArray", array);

   this.setState({
     //we are updating the state here
     images:array
   });
};

reset = () => {
  // logic to resest the game

};

displayPhotos=(images) => {
  //images.map( item => console.log("display photos", item.id, item.img) );
  return images.map( item => <Newfie key={ item.id } id={item.id} photo={item.img} triggerShuffle={this.shuffleArray} resetGame={this.reset} />);

};

  render() {
    const photos = this.displayPhotos(this.state.images);
    //console.log("render", this.state.images)  the displayphotos function returns one newfie component for //every item in the images state. then we are storing that return value into the photos constant 
    return (
      <div className="NewfieContainer"> 
      NewfieContainer
      { photos }
      
      </div>
    );
  }
}

export default NewfieContainer;
