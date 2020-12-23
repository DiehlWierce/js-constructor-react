import { Component } from "react";

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.word = "Settings";
  }

  render() {
    return (
      <div className="settings">
          <h1>{this.word}</h1>
      </div>
    );
  }
}

export default SettingsPage;
