import { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {

  render() {
    return (
      <div>
        <p>App developed by TJ Parker and Caelin Hargrave</p>
        <Link to="/home">Home</Link> 
      </div>
    )
  }
};

export default Profile;
