import './App.css'
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "turn.js";
import HistoryLectionOne from "./components/HistoryLection1/HistoryLection1"
import HistoryLectionTwo from "./components/HistoryLection2/HistoryLection2"
import EnglishLectionOne from "./components/EnglishLection1/EnglishLectionOne";
import EnglishLectionTwo from "./components/EnglishLection2/EnglishLectionTwo";
import FarmLectionOne from "./components/FarmLection1/FarmLection1";
import FarmLectionTwo from "./components/FarmLection2/FarmLection2";

import "./index.css";

class Turn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {}
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .remove();
    }
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(this.el).turn("previous");
    }
    if (event.keyCode === 39) {
      $(this.el).turn("next");
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)}
      >
        {this.props.children}
      </div>
    );
  }
}

const options = {
  width: 1000,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
    }
  }
};

const pages = [
  "http://ih0.redbubble.net/image.440904853.9850/flat,550x550,075,f.u1.jpg",
];

function App() {
  return (
    <Turn options={options} id="flipbook" className="magazine">
      
        <div className="page" >
          <img src={pages[0]} alt="" />
        </div>

        <HistoryLectionOne></HistoryLectionOne>
        <HistoryLectionTwo></HistoryLectionTwo>
        <EnglishLectionOne></EnglishLectionOne>
        <EnglishLectionTwo></EnglishLectionTwo>
        <FarmLectionOne></FarmLectionOne>
        <FarmLectionTwo></FarmLectionTwo>
        <div className="page" >
          <img src={pages[0]} alt="" />
        </div>
     
    </Turn>
  );
}

export default App;
