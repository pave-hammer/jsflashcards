import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          Hello World!
        <h1>JS Flashcards</h1>
        <div className="row">
          <div className="col-sm-1">test</div>
          <div className="card container">
            <div className="card card-title">
              Card Title
            </div>
            <div className="card card-body col-lg-6">
              Card text goes here!
            </div>
          </div>
          <div className="col-sm-1">test</div>
        </div>
        <input type="text" placeholder="Type here"></input>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;
