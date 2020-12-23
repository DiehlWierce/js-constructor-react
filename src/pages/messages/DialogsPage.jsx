import { Component } from "react";

class DialogsPage extends Component {
  constructor(props) {
    super(props);
    this.word = "Dialogs";
  }

  render() {
    return (
      <div className="dialogs">
          <h1>{this.word}</h1>
      </div>
    );
  }
}

export default DialogsPage;
