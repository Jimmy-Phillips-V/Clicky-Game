import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let images = [
  {
    id: 1,
    photo: logo,
    hasBeenClicked: false
  },
  {
    id: 2,
    photo: logo,
    hasBeenClicked: false
  },
  {
    id: 3,
    photo: logo,
    hasBeenClicked: false
  },
  {
    id: 4,
    photo: logo,
    hasBeenClicked: false
  },
]

class App extends Component {

  constructor(){
    super()
    this.state = {
      score: 0,
      images: images
    }
  }

  // this one is mine
  handleImageClick = (id) => {
    console.log(id);

    for (var i = 0; i < images.length; i++) {
      if(images[i].id === id){

        if(images[i].hasBeenClicked === false){
          images[i].hasBeenClicked = true
        } else {
          alert('you loose! becuase that has already been clicked')
        }
      }
    }
    this.setState({
      score: this.state.score + 1
    })
  }

  // 1 of 11 react lifecycle method
  componentDidMount(){
    console.log('hello');
  }

  componentWillMount(){
    console.log('will mount');
  }

  render() {

    const displayImages = this.state.images.map((eachItem, index) =>
      <img onClick={() => this.handleImageClick(eachItem.id)} src={eachItem.photo} alt="hello" key={index}/>
    )

    return (
      <div>
        <div className="App">
          <h1>Clicky Game</h1>

        </div>

        <p>Score is {this.state.score}</p>
        <button onClick={this.handleImageClick}>Image</button>
        <div className="images">
          {displayImages}
        </div>
      </div>
    );
  }
}

export default App;
