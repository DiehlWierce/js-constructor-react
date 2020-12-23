import { Component } from "react";


class Post extends Component {
  render() {
    return (
        <div className="posts__item">
            <span>{this.props.message}</span>
        </div>
    )
  }
}

export default Post;
