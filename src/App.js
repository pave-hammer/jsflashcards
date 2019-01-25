import React, { Component } from 'react';
import './App.css';
import Data from './data.json';
import Card from './components/card.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: Data.methods.splice(1),
      tags: Data.methods.shift(),
      currentCard: "",
      userAnswer: "",
      correctAnswer: false,
      id: 0
    }
  }

  generateCard = (event) => {
    event.preventDefault()
    const getRandomNum = Math.floor(Math.random() * this.state.data.length)
    this.setState({
      currentCard: this.state.data[getRandomNum],
      userAnswer: "",
      correctAnswer: false
    })
  }

  getNext = (id) => {
    if(this.state.id > this.state.data.length - 1){
      this.setState({
        currentCard: this.state.data[id],
        id: 0
      })
    } else {
      this.setState({
        currentCard: this.state.data[id],
        id: this.state.id + 1,
        userAnswer: "",
        correctAnswer: false
      })
    }
  }

  // getPrev = (id) => {
  //   if(this.state.id < 0){
  //     this.setState({
  //       currentCard: this.state.data[id],
  //       id: this.state.data.length
  //     })
  //   } else {
  //     this.setState({
  //       currentCard: this.state.data[id],
  //       id: this.state.id - 1
  //     })
  //   }
  // }

  getText = (event) => {
    this.setState({
      userAnswer: event.target.value
    })
  }

  checkAnswer = () => {
    return this.state.userAnswer === this.state.currentCard.name ? this.setState({correctAnswer: true}) : ""
  }

  render() {
    return (
      <div className="App">
        <Card
          currentCard={this.state.currentCard}
          userAnswer={this.state.userAnswer}
          correctAnswer={this.state.correctAnswer}
          generateCard={this.generateCard}
          getText={this.getText}
          checkAnswer={this.checkAnswer}/>
          {/* <button type="submit" onClick={() => this.getPrev(this.state.id)}>Previous</button> */}
          <button type="submit" onClick={() => this.getNext(this.state.id)}>Next</button>
      </div>
    );
  }
}

export default App;
