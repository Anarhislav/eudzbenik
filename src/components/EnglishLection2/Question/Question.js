import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./Question.css";
class Question extends Component {
  state = { clicked: false };
  restart = () => {
    this.setState({
      clicked: false
    });
  };
  onClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <div className="q-title">Question {this.props.number}</div>
        <div className="q-title">{this.props.question}</div>
        <div className="buttons">
          {this.props.answers.map(element => {
            if (this.state.clicked) {
              if (element == this.props.correctAnswer) {
                return (
                  <Button
                    key={element}
                    onClick={this.onClick}
                    color="primary"
                    variant="contained"
                  >
                    {element}
                  </Button>
                );
              }
              return (
                <div>
                  <Button
                    key={element}
                    onClick={this.onClick}
                    color="secondary"
                    variant="contained"
                  >
                    {element}
                  </Button>
                 
                </div>
              );
            }
            return (
              <Button key={element} onClick={this.onClick} variant="contained">
                {element}
              </Button>
            );
          })}
        </div>
        <div className="dugme-rst">
        <Button  variant="contained" onClick={this.restart}>
                    Restart
                  </Button>
        </div>
        
      </div>
    );
  }
}

export default Question;
