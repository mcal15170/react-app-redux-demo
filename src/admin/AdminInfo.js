import React, { Component } from 'react'
import { connect } from "react-redux"

class AdminInfo extends Component {
    render() {
        return (
            <div>
                <h5>Admin  "{this.props.name}"</h5>
                
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
  export default connect(mapStateToProps,mapDisplatchToProps)(AdminInfo);
  
