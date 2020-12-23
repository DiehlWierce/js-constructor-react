import { Component } from "react";
import Sidebar from "./Sidebar";
import Profile from "../pages/profile/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Sidebar />
          <Profile />
        </div>
      </Router>
    );
  }
}

export default Main;
