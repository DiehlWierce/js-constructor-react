import React from "react";

class ColumnBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    };
  }

  render() {
    return (
      <div className="column-block">
        {this.state.value.map((elem) => (
          <p className="elem">{elem}</p>
        ))}
      </div>
    );
  }
}

export default ColumnBlock;
