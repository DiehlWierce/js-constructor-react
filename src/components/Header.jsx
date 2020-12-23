import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = "Header";
  }

  render() {
    return <div className="header">{this.state}</div>;
  }
}

export default Header;
