import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
          <input type="text" className="input" placeholder="Type here"></input>
          <button type="submit" className="btn btn-primary">Add new</button>
        </div>
      </div>
    );
  }
}

export default App;
