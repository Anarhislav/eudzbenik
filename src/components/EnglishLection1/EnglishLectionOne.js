import React, {Component} from "react";
import ReactAudioPlayer from "react-audio-player";
import "./EnglishLectionOne.css";
import familiy from "./family.ogg";
class EnglishLectionOne extends Component {
  render() {
    return (
      <div className="background-english-page1">
        <div className="english-title">My Wonderful Family</div>
        <div className="enlish-text">
          I live in a house near the mountains. I have two brothers and one
          sister, and I was born last. My father teaches mathematics, and my
          mother is a nurse at a big hospital. My brothers are very smart and
          work hard in school. My sister is a nervous girl, but she is very
          kind. My grandmother also lives with us. She came from Italy when I
          was two years old. She has grown old, but she is still very strong.
          She cooks the best food! My family is very important to me. We do lots
          of things together. My brothers and I like to go on long walks in the
          mountains. My sister likes to cook with my grandmother. On the
          weekends we all play board games together. We laugh and always have a
          good time. I love my family very much.
        </div>
        <div>
          <ReactAudioPlayer className="audioplayer" src={familiy}  controls  />
        </div>
      </div>
    );
  }
}

export default EnglishLectionOne;
