import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = "Footer";
  }

  render() {
    return <div className="footer">{this.state}</div>;
  }
}

export default Footer;
