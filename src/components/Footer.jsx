import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = "Andrew & Ivan Prod. Все права защищены. ";
  }

  render() {
    return (
      <div className="footer">
        <span>{this.state}</span>
      </div>
    )
  }
}

export default Footer;
