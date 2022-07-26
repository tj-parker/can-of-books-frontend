import { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <div>
        <p>Frontend App developed by TJ Parker, Backend App developed by Caelin Hargrave</p>
        <Link to="/App">Home</Link> 
      </div>
    )
  }
};

export default Profile;
