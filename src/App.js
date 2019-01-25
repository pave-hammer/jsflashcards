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
      correctAnswer: false
    }
  }

  generateCard = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    const getRandomNum = Math.floor(Math.random() * this.state.data.length)
    this.setState({
      currentCard: this.state.data[getRandomNum],
      userAnswer: "",
      correctAnswer: false
    })
  }

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
      </div>
    );
  }
}

export default App;
