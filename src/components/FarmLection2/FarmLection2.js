import React, { Component } from "react";
import "./FarmLection2.css";

import detlic from "./detlicn.gif";
import divljasvinja from "./divlja svinjan.gif";
import kokoska from "./kokoskan.gif";
import konj from "./konjn.gif";
import kornjaca from "./kornjacan.gif";
import koza from "./kozan.gif";
class FarmLectionTwo extends Component {

    state = {
        detlic: "container",
        divljasvinja: "container",
        kokoska: "container",
        konj: "container",
        kornjaca: "container",
        koza: "container"
    }
  dragstart_handler = event => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("id", event.target.id);
  };

  onDragOver = event => {
    event.stopPropagation();
    event.preventDefault();
    // console.log(event.dataTransfer.getData("text/html"));
  };

  onDragEnter = event => {
    event.stopPropagation();
  };

  onFileDrop = (type, event) => {
    event.stopPropagation();
    let data = event.dataTransfer.getData("id");
    event.target.appendChild(document.getElementById(data));
    switch(type){
        case 'domace': {

            this.setState({
                ...this.state,
                [data]: type
            })
            break;
        }
        case 'divlje': {
            this.setState({
                ...this.state,
                [data]: type
            })
            break;
        }
        case 'container': {
            this.setState({
                ...this.state,
                [data]: type
            })
            break;
        }
    }
  };

  render() {
      console.log(this.state);
      let porukaUspeha = (<div className="uspeh">Uspesno si uradio zadatak</div>)
      let porukaNeuspeha = <div className="neuspeh">Pokusaj ponovo</div>
      let poruka = checkAnswer(this.state) ? porukaUspeha : porukaNeuspeha;
    return (
      <div className="zivotinje2">
        <div className="text-section-zivotinje2">
          Tvoj zadatak je da razvrstas divlje i domace zivotinje u prave
          kategorije.
        </div>
        <div className="container">
          <div
            className="zivotinje-container"
            onDragEnter={this.onDragEnter}
            onDragOver={this.onDragOver}
            onDrop={this.onFileDrop.bind(this, 'domace')}
          >
            Domoace zivotinje
          </div>
          <div
            className="zivotinje-container"
            onDragEnter={this.onDragEnter}
            onDragOver={this.onDragOver}
            onDrop={this.onFileDrop.bind(this, 'divlje')}
          >
            Divlje zivotinje
          </div>
        </div>
        
        <div
          onDragEnter={this.onDragEnter}
          onDragOver={this.onDragOver}
          onDrop={this.onFileDrop.bind(this, 'container')}
          className="section-zivotinje"
        >
           
            
          <img
            className="slike-zivotinja"
            id="detlic"
            draggable="true"
            onDragStart={this.dragstart_handler}
            src={detlic}
          ></img>
          <img
            className="slike-zivotinja"
            id="divljasvinja"
            draggable="true"
            onDragStart={this.dragstart_handler}
            src={divljasvinja}
          ></img>
          <img
            className="slike-zivotinja"
            id="kokoska"
            draggable="true"
            onDragStart={this.dragstart_handler}
            src={kokoska}
          ></img>
          <img
            className="slike-zivotinja"
            id="konj"
            draggable="true"
            onDragStart={this.dragstart_handler}
            src={konj}
          ></img>
          <img
            className="slike-zivotinja"
            id="kornjaca"
            draggable="true"
            onDragStart={this.dragstart_handler}
            src={kornjaca}
          ></img>
          <img
            className="slike-zivotinja"
            id="koza"
            draggable="true"
            onDragStart={this.dragstart_handler}
            src={koza}
          ></img>
        </div>
        {isAllItemsPlaced(this.state) && poruka}
      </div>
    );
  }
}

function checkAnswer(state){
    let result = true;
    result =result && (state.detlic === state.divljasvinja && state.kornjaca === "divlje" && state.kornjaca );
    result = result && (state.kokoska === state.koza && state.kokoska === "domace" && state.kokoska === state.koza)
    return result;
}
function isAllItemsPlaced(state) {
    let result = true;
    Object.values(state).map(element => {
        result = result && element != "container"
    })
    return result;
}

export default FarmLectionTwo;
