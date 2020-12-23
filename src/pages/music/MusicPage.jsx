import { Component } from "react";

class MusicPage extends Component {
  constructor(props) {
    super(props);
    this.word = "Music";
  }

  render() {
    return (
      <div className="music">
          <h1>{this.word}</h1>
      </div>
    );
  }
}

export default MusicPage;
