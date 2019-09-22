import React, { Component } from "react";
import "./MathLection1.css";
import Button from "@material-ui/core/Button";

class MathLectionOne extends Component {
  state = {
    number1: Math.floor(Math.random() * 10) + 1,
    number2: Math.floor(Math.random() * 10) + 1,
    result: "",
    tests: []
  };

  handleResult = event => {
    this.setState({ result: event.target.value });
  };

  handleRestart = () => {
    this.setState({ tests: [], result: "" });
  };

  newTask = () => {
    this.setState({
      number1: Math.floor(Math.random() * 10) + 1,
      number2: Math.floor(Math.random() * 10) + 1,
      result: ""
    });
  };
  handleClick = () => {
    let newTests = [...this.state.tests];
    newTests.push(this.isCorrect());
    this.setState({
      tests: [...newTests]
    });
    this.newTask();
  };
  checkOdgovore = () => {
    let result = true;
    this.state.tests.forEach(element => {
      if (element === false) {
        result = false;
      }
    });
    return result;
  };
  isCorrect = () => {
    return this.state.number1 * this.state.number2 == +this.state.result;
  };

  render() {
    const arr1 = new Array(this.state.number1).fill(1);
    const arr2 = new Array(this.state.number2).fill(1);
    const odgovori = new Array(10).fill(1);

    return (
      <div className="pozadinaMath1">
        <div className="title  ">Vezbanje Tablice množenja</div>
        <div>
          <div className="circle-container">
            {arr1.map(() => (
              <div className="row">
                {arr2.map(() => (
                  <div className="zeleniKrug"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="jednacina">
          <div>
            {this.state.number1} X {this.state.number2} =
          </div>
          <input
            className="inputStyle"
            onChange={this.handleResult}
            value={this.state.result}
            type="number"
          ></input>
          <Button
            disabled={this.state.tests.length === 10}
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Unesi rezultat
          </Button>
        </div>
        <div className="rezultati">
          {odgovori.map((el, index) => {
            if (this.state.tests[index] == null) {
              return <div className="siviKrug"> </div>;
            } else if (this.state.tests[index] == true) {
              return <div className="zeleniKrug"></div>;
            } else {
              return <div className="crveniKrug"></div>;
            }
          })}
        </div>
        <div>
          {this.state.tests.length === 10 && this.checkOdgovore() == true && (
            <div className="bravo"> Bravo!</div>
          )}
          {this.state.tests.length === 10 && this.checkOdgovore() == false && (
            <div className="try-again"> Pokusaj Ponovo</div>
          )}
        </div>
        <div className="restart">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleRestart}
          >
            Počni ponovo
          </Button>
        </div>
      </div>
    );
  }
}

export default MathLectionOne;
