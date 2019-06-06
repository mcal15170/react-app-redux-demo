import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
                <h2>About Page  by {this.props.name}</h2>
                <Link to={`/`}>Go To Home</Link>
                
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      name: state.user.userName
    };
  }
  function mapDisplatchToProps(dispatch){
  return({
  
  })
  }
  export default connect(mapStateToProps,mapDisplatchToProps)(About);
  
