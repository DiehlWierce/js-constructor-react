import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = "Footer";
  }

  render() {
    return <div className="footer">{this.state}</div>;
  }
}

export default Footer;
