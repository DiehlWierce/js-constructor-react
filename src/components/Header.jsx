import React from "react";
import logo from '../assets/logo.PNG'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Andressenger";
  }

  render() {
    return (
      <div className="header">
        <img src={logo} alt='social logo' />
        <span>{this.name}</span>
      </div>
    )
  }
}

export default Header;
