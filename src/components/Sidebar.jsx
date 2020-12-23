import { Component } from "react";
import { Link } from "react-router-dom"; 

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
            <Link to="/profile">Profile</Link>
            <Link to="/messages">Messages</Link>
            <Link to="/news">News</Link>
            <Link to="/music">Music</Link>
            <Link to="/settings">Settings</Link>
        </div>
    )
  }
}

export default Sidebar;
