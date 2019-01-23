import React, { Component } from 'react';
import './App.css';
import Data from './data.json';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: Data
    }
  }

  addNew = (event) => {
    event.preventDefault()
    console.log("The button works!")
  }

  render() {
    return (
      <div className="App">
          Hello World!
        <h1>JS Flashcards</h1>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="card border border-dark col-sm-4">
            <div className="card-body">
              <h5 className="card-title">Flashcard title</h5>
              <p className="card-text">Flashcard Body</p>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="add-new">
          <div>
            <input type="text" className="title-input" placeholder="Flashcard Subject"></input>
            <input type="text" className="body-input" placeholder="Flashcard Body"></input>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.addNew}>Add new</button>
        </div>
      </div>
    );
  }
}

export default App;
