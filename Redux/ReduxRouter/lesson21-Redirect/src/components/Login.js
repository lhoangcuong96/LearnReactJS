import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import Products from "./Products";
import * as actions from '../actions/index';
import {connect} from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUserName: "",
      txtPassword: "",
    }
  }
  onChange=(e)=>{
    var {target}= e;
    var {name}=target;
    var {value}=target;
    this.setState({
      [name]:value
    })
  }
  onLogin=(e)=>{
    e.preventDefault();
    if(this.state.txtUserName==="admin"&& this.state.txtPassword=="admin"){
      localStorage.setItem("user",JSON.stringify({
        user:this.state.txtUserName,
        password:this.state.txtPassword,
      }))
      this.props.changeStateLoging()
    }
  }
  render() {
    if(this.props.isLoging==true){
      return(<Redirect to="/products"/>)
      // phần redirect chỉ trong phần render
      // làm trực tiếp trên func k dc
      // 
    }
    var {txtUserName,txtPassword}=this.state;
    var user= JSON.parse(localStorage.getItem("user"));
    // location là địa chỉ trnag hiện tại 
    // path trùng thì bên route truyền về cho login
    // khi từ login sang products (khi đã đang nhập sẵndo redirect chứ đăng nhập chưa có tự chuyển đc)
    //(lúc này mình k vào dc bên login do user có rồi !=null)
    // khi đó redirect sẽ chuyển vè product đồng thời có thêm đính kèm state chứa location hiện tại
    //=> sau khi chuyển bên products sẽ biết trang trước đó chuyển qua là gì
    // var {location}=this.props
    // if(user!=null){
    //   return(<Redirect to ={{
    //     pathname:"/products",
    //     state:{
    //       from:location
    //     }
    //     //<Redirect to="/products"/>
    //   }}/>)
    // }
    var {isLoging}= this.props
    return (
      <div class="row">
        <div class="6 col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ left: "33%", position: "absolute" }}>
          <form onSubmit={this.onLogin}>
            <h3>Login</h3>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id=""
                placeholder="UserName"
                name="txtUserName"
                value={txtUserName}
                onChange={this.onChange}
              />
              <input
                type="password"
                class="form-control"
                id=""
                placeholder="Password"
                name="txtPassword"
                value={txtPassword}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" class="btn btn-info">Login</button>
          </form>
        </div>
      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return{
    isLoging:state.menuState
  }
   
};
const mapStateToDispatch=(dispatch,props)=>{
  return{
    changeStateLoging:()=>{
      dispatch(actions.changeState())
    }
  }
   
}
export default connect(mapStateToProps,mapStateToDispatch)(Login);
