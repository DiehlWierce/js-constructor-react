import React from "react";
import image from "../assets/test-image.jpg";

class ImageBlock extends React.Component {
  constructor() {
    super();
    this.state = "Content";
  }

  render() {
    return (
      <div className="image-block">
        <img src={image} alt="test" width="200px" height="150px" />
      </div>
    );
  }
}

export default ImageBlock;
