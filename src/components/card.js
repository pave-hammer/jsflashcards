import React, { Component } from 'react';

class Card extends Component {
  
  showCard = () => {
    if(!this.props.currentCard){
      return (
        <div className="card-body">
          <h5 className="card-title">Click the generate button to select a random notecard!</h5>
          <p className="card-text">Type your answer into the input box and click check answer.</p>
        </div>
      )
    } else {
      return (
        <div className="card-body">
          <h5 className="card-title">{!this.props.correctAnswer ? <p>Which method is this?</p> : <p>{this.props.currentCard.name}</p>}</h5>
          <p className="card-text">{this.props.currentCard.description}</p>
          <p className="card-text">{this.props.currentCard.example}</p>
        </div>
      )
    }
  }

  render(){
    return (
      <div>
        <h1>JS Notecards</h1>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="card border border-dark col-sm-4">
            {this.showCard()}
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="add-new">
          <div className="row">
            <form onSubmit={this.props.generateCard}>
              <input type="text" className="title-input" placeholder="Answer" value={this.props.userAnswer} onChange={this.props.getText}></input>
              <input type="submit" value="Generate" className="btn btn-primary"></input>
            </form>
            <button 
              className={this.props.correctAnswer ? "btn btn-success" : "btn btn-danger"} 
              onClick={this.props.checkAnswer}>{!this.props.correctAnswer ? "Check Answer" : "Nice!"}
            </button>
          </div>
        </div>
        {!this.props.correctAnswer ? <p>Please type your answer</p> : <p>Your answer is correct!</p>}
      </div>
    )
  }
}
export default Card