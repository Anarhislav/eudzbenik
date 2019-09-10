import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./Question.css"
class Question extends Component {
    state = { clicked: false }
    onClick = ()=> {
        this.setState({clicked: true})
    }

    render() { 
        return ( 
            <div>
                <div className="english-text-2">Question {this.props.number}</div>
                <div className="english-text-2">{this.props.question}</div>
                <div className="buttons">
                    {this.props.answers.map(element => {
                        if(this.state.clicked){
                            if(element == this.props.correctAnswer){
                                return (<Button  onClick={this.onClick} color="primary"  variant="contained">{element}</Button>)
                            }
                            return (<Button   onClick={this.onClick} color="secondary" variant="contained">{element}</Button>)
                        }
                        return (<Button onClick={this.onClick}  variant="contained">{element}</Button>)
                    })}
                </div>
            </div>
         );
    }
}
 
export default Question;