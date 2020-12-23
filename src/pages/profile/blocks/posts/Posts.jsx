import { Component } from "react";
import Post from "./post/Post";


class Posts extends Component {
  render() {
    return (
        <div className="posts">
            <div className="posts__form">
                <form>
                    <input type="text" placeholder='add message' />
                    <button>send</button>
                </form>
            </div>
            <Post message="message 1" />
            <Post message="message 2" />
            <Post message="message 3" />
        </div>
    )
  }
}

export default Posts;
