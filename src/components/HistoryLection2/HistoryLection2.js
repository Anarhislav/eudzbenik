import React from "react";
import "./HistoryLection2.css";

const HistoryLectionTwo = () => {
  return (
    <div className="background-page2">
      <div className="textSection">
        Овде можеш да погледаш лекцију о другом светском рату.
      </div>
      <iframe
       className="iframeClass"
        width="500"
        height="315"
        src="https://www.youtube.com/embed/NGYpu2EW6jo"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HistoryLectionTwo;
