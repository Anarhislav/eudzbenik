import React, { Component } from "react";
import "./MathLection2.css";
import { Button } from "@material-ui/core";

class MathLectionTwo extends Component {
  state = {
    result: [15, 17, 19, 11, 15, 5, 8, 25],
    answers: Array(8).fill(''),
    showResult: false
  };

  handleRestart = () => {
      this.setState({
        answers: Array(8).fill(''),
        showResult: false
      })
  }
  handleShowResult = () => {
    this.setState({
        showResult: true
      })
  }
  checkAnswer = (index) => {
      return this.state.result[index] ==  +this.state.answers[index]
  }
  handleChange = (event, index) => {
    let newArray = [...this.state.answers];
    newArray[index] = event.target.value;
    this.setState({
        answers: [...newArray]
    })
  } 

  render() {
    return (
      <div className="pozadinaMath2">
        <div className="title">Reši sledeće zadatke</div>

        <div className="zadatak-mat">
          5 * (2+0)/2 + 5*2 =
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(0) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,0)}}
            value={this.state.answers[0]}
            type="number"
          ></input>
        </div>
        <div className="zadatak-mat">
          6/3 + 2 * (1+4) + 10/2 =
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(1) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,1)}}
            value={this.state.answers[1]}
            type="number"
          ></input>
        </div>
        <div className="zadatak-mat">
          12/4 + (1 + 2 * 2 + 3) * 2 =
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(2) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,2)}}
            value={this.state.answers[2]}
            type="number"
          ></input>
        </div>
        <div className="zadatak-mat">
          12 * 3 / 4 + 2=
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(3) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,3)}}
            value={this.state.answers[3]}
            type="number"
          ></input>
        </div>
        <div className="zadatak-mat">
          4 + 8*2/4 + 3 * 2 + 1 =
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(4) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,4)}}
            value={this.state.answers[4]}
            type="number"
          ></input>
        </div>
        <div className="zadatak-mat">
          8/4 * 2 + 1 =
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(5) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,5)}}
            value={this.state.answers[5]}
            type="number"
          ></input>
        </div>
        <div className="zadatak-mat">
          5*3 / 15 + 2*3 + 1 =
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(6) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,6)}}
            value={this.state.answers[6]}
            type="number"
          ></input>
        </div>
        <div className="zadatak-mat">
          7*3 + 2 + 4 / 2 =
          <input
            className={`inputStyle  ${this.state.showResult ? (this.checkAnswer(7) ? 'tacno' : 'netacno') : ''}`}
            onChange={(event)=> {this.handleChange(event,7)}}
            value={this.state.answers[7]}
            type="number"
          ></input>
        </div>
        <div className="button-container">
        <Button onClick={this.handleShowResult} variant="contained" color="primary">
          Proveri Rezultat
        </Button>
        <Button onClick={this.handleRestart} variant="contained" color="primary">
          Počni ponovo
        </Button>
        </div>
        
      </div>
    );
  }
}

export default MathLectionTwo;
