import { Component } from "react";
import ava from '../assets/test-image.jpg'

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.ava = ava;
  }

  render() {
    return <div className="avatar">
        <img src={this.ava} alt='avatarka' />
    </div>;
  }
}

export default Avatar;
