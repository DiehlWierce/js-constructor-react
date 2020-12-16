import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

class Main extends React.Component {
  constructor() {
    super();
    this.state = "Main";
  }

  render() {
    return (
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default Main;
