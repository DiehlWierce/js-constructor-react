import { Component } from "react";
import Posts from "../../blocks/posts/Posts";
import UserInfo from "../../blocks/UserInfo";

class Content extends Component {
  constructor(props) {
    super(props);
    this.word = "Content";
  }

  render() {
    return (
      <div className="content">
        <UserInfo />
        <Posts />
      </div>
    );
  }
}

export default Content;
