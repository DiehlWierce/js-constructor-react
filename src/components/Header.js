import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = "Header";
  }

  render() {
    return <div className="header">{this.state}</div>;
  }
}

export default Header;
