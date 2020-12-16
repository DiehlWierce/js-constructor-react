import React from "react";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = "Sidebar";
  }

  render() {
    return <div className="sidebar">{this.state}</div>;
  }
}

export default Sidebar;
