import React, { Component } from 'react';
import Question from './Question/Question';
import "./EnglishLectionTwo.css"
class EnglishLectionTwo extends Component {
    state = {  }
    render() { 
        return (  
            <div className= "background-english-page2">
                <div className="english-title">
                    Did you understand the text?
                </div>
                <div className="english-text-2">
                    Please answer the following questions of understanding:
                </div>
                <div>
                    <Question number= "1" question="My Mother is a..." answers={["Waitress","Doctor", "Nurse", "Writer"]} correctAnswer="Nurse"/>
                    <Question number= "2" question="My house is near the..." answers={["Italy","City", "Mountains", "Monastery"]} correctAnswer="Mountains"/>
                    <Question number= "3" question="How old was I when my grandmother came?" answers={["Ten years old","Two years old", " Just born", "Three years old"]} correctAnswer="Two years old"/>
                </div>
            </div>
        );
    }
}
 
export default EnglishLectionTwo;