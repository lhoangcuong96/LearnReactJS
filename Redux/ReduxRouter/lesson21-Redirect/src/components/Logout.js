import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class Logout extends Component {
  render() {
    this.props.changeStateMenu()
    return (
      <Redirect to="login"/>
    )
  }
}
const mapStateToDispatch=(dispatch,props)=>{
  return{
    changeStateMenu:()=>{
      dispatch(actions.changeState())
    }
  }

}
export default connect(null,mapStateToDispatch)(Logout);
