import { Component } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

class Main extends Component {
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
