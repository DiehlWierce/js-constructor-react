import { Component } from "react";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.word = "News";
  }

  render() {
    return (
      <div className="news">
          <h1>{this.word}</h1>
      </div>
    );
  }
}

export default NewsPage;
