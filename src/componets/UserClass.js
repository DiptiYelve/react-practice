import React from "react";
import "./UserClass.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
        data: {},
    }
  } 

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/diptiyelve");
    const jsonData = await data.json();
    this.setState({
        data: jsonData,
    })
  };

  render() {
    const { name, location, html_url} = this.state.data;
    return (
      <div className="devInfoContainer">
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p>Contact: {html_url} </p>
      </div>
    );
  }
}

export default UserClass;
