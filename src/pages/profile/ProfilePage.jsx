import { Component } from "react";
import Posts from "./blocks/posts/Posts"
import UserInfo from "./blocks/UserInfo";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.word = "Profile";
  }

  render() {
    return (
      <div className="profile">
        <UserInfo />
        <Posts />
      </div>
    );
  }
}

export default ProfilePage;
