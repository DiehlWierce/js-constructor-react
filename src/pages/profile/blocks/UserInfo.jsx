import { Component } from "react";
import Avatar from "./Avatar";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.info = {
        firstname: "Ivan",
        secondname: "Ivanovich",
        lastname: "Ivanov",
        age: 28,
        country: "Russia",
        city: "Saint-Petersburg"
    }
  }

  render() {
    return (
        <div className="user-info">
            <Avatar />
            <div className='description'>
                <span>My first name is <b>{this.info.firstname}</b>.</span> 
                <span>My second name is <b>{this.info.secondname}</b>.</span> 
                <span>My last name is <b>{this.info.lastname}</b>.</span> 
                <span>I am <b>{this.info.age}</b> years old.</span> 
                <span>I am from <b>{this.info.country}</b>, <b>{this.info.city}</b>.</span>
            </div> 
        </div>
    )
  }
}

export default UserInfo;
