import React from "react";
import TitleBlock from "../views/titleBlock";
import TextBlock from "../views/textBlock";
import ImageBlock from "../views/imageBlock";
import ColumnBlock from "../views/columnBlock";

class Content extends React.Component {
  constructor() {
    super();
    this.state = "Content";
  }

  render() {
    return (
      <div className="content">
        <TitleBlock />
        <TextBlock />
        <ImageBlock />
        <ColumnBlock />
      </div>
    );
  }
}

export default Content;
