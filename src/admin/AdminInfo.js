import React, { Component } from "react";
import { connect } from "react-redux";

class AdminInfo extends Component {
  render() {
    const user = this.props.users.map((data,i) => {
      return <li key={i}>{data.name}</li>;
    });
    return (
      <div>
        <h2>User List</h2>
        <ul>{user}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.user
  };
}
function mapDisplatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDisplatchToProps
)(AdminInfo);
