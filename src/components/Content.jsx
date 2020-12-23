import { Component } from "react";
import ProfilePage from "../pages/profile/ProfilePage";
import DialogsPage from "../pages/messages/DialogsPage";
import NewsPage from "../pages/news/NewsPage";
import MusicPage from "../pages/music/MusicPage";
import SettingsPage from "../pages/settings/SettingsPage";
import { Route, Redirect, Switch } from "react-router-dom";

class Content extends Component {
  constructor(props) {
    super(props);
    this.word = "Content";
  }

  render() {
    return (
      <div className="content">
        <Switch>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/messages" component={DialogsPage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/music" component={MusicPage} />
            <Route path="/settings" component={SettingsPage} />
            <Redirect from='/' to='/profile'/>
        </Switch>
      </div>
    );
  }
}

export default Content;
