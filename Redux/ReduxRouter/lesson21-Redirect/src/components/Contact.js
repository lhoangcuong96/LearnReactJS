import React, { Component } from 'react';
import {Prompt} from 'react-router-dom' // import prompt

class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      isChecked:false
    }
  }
  onChange=(event)=>{
    
    var value=event.target.value
    if(value!=""){
      this.setState({
        isChecked:true
      })
    }else{
      this.setState({
        isChecked:false
      })
    }
  }
  check=()=>{
    if(this.state.isChecked==true){
      return true
    }
    else{
      return false
    }
  }
  render() {
    return (
      <div>
        <h3>Đây là trang liên hệ</h3>
        <textarea name="" id="input" class="form-control" rows="3" required="required" onChange={this.onChange}></textarea>
        
        <Prompt
          when={this.check()}
          message={location=>(`bạn chắc chắn muốn đi đến ${location.pathname}`)}
          //Prompt cho 1 đối lượng location là trang bạn đang muốn đến 
        />
      </div>
    )
  }
}

export default Contact;
