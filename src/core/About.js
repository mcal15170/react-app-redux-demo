import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        const userLen=Object.keys(this.props.lastUser).length;
        const user=this.props.lastUser.map((data,i)=>{
            if(userLen === i+1){
               return <div key={i}>{data.name}</div>
            }
        })
        return (
            <div>
                <h2>Last added User</h2>
                <h5>Total Recoreds : {userLen}</h5>
                <h5>Last User : {user}</h5>
                
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      lastUser: state.user
    };
  }
  function mapDisplatchToProps(dispatch){
  return({
  
  })
  }
  export default connect(mapStateToProps,mapDisplatchToProps)(About);
  
