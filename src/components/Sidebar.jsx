import { Component } from "react";

class Sidebar extends Component {
  render() {
    return <div className="sidebar">
      <a href="/">Profile</a>
      <a href="/messages">Messages</a>
      <a href="/news">News</a>
      <a href="/music">Music</a>
      <a href="/settings">Settings</a>
    </div>;
  }
}

export default Sidebar;
