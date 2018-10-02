import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import logo from './logo.svg';
import './App.css';

// let images = [
//   {
//     id: 1,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 2,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 3,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 4,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 5,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 6,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 7,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 8,
//     photo: logo,
//     hasBeenClicked: false
//   },
//   {
//     id: 9,
//     photo: logo,
//     hasBeenClicked: false
//   }
// ]

class App extends Component {

  constructor(){
    super()
    this.state = {
      score: 0,
      friends
    }
  }

  // this one is mine
  // handleImageClick = (id) => {
  //   console.log(id);

  //   for (var i = 0; i < images.length; i++) {
  //     if(images[i].id === id){

  //       if(images[i].hasBeenClicked === false){
  //         images[i].hasBeenClicked = true
  //       } else {
  //         alert('you lose! becuase that has already been clicked')
  //       }
  //     }
  //   }
  //   this.setState({
  //     score: this.state.score + 1
  //   })
  // }

  // 1 of 11 react lifecycle method
  componentDidMount(){
    console.log('hello');
  }

  componentWillMount(){
    console.log('will mount');
  }

  render() {

    // const displayImages = this.state.images.map((eachItem, index) =>
    //   <img onClick={() => this.handleImageClick(eachItem.id)} src={eachItem.photo} alt="hello" key={index}/>
    // )

    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
