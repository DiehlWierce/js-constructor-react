import React from "react";

class TitleBlock extends React.Component {
  constructor() {
    super();
    this.state = "Content";
  }

  render() {
    return (
      <div className="title-block">
        <h1>Title</h1>
      </div>
    );
  }
}

export default TitleBlock;
