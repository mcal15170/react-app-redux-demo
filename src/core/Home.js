import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeState } from "../store/action/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: ""
    };
  }

  changeState = () => {
    if(this.state.txtName){
      this.props.changeStateToReducer({name:this.state.txtName});
      this.setState({ txtName: "" });
    }else{
      alert("name is empty!");
    }
    
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { txtName } = this.state;
    return (
      <div>
        <h2>Home page</h2>
        <input
          type="text"
          name="txtName"
          placeholder="Enter Name"
          value={txtName}
          onChange={this.changeHandler}
        />
        <button onClick={this.changeState}>Change State</button>
        {/* <Link to={`/admin`}>Go To About</Link> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDisplatchToProps(dispatch) {
  return {
    changeStateToReducer: updatedUserName => {
      dispatch(changeState(updatedUserName));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDisplatchToProps
)(Home);
