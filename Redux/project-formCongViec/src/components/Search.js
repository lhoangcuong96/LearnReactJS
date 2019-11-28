import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'


class Search extends Component{
    constructor(props){
      super(props);
      this.state={
        keyword:"",
      }
    }
    onChange=(event)=>{
      var target= event.target;
      var name = target.name;
      var value= target.value;
      this.setState({
        [name]:value,
      })
    }

    onSearch=()=>{
      this.props.onSearch(this.state.keyword)
    }


    render(){
        return( 
            //classname=row => chiếm nguyên hàng thg sort sẽ bị văng xuống
        <div >
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{paddingRight:0}}>
            <input 
              type="text" 
              name="keyword"  
              className="form-control " 
              required="required" 
              title="" 
              value={this.state.keyword}
              onChange={this.onChange}
            />
            {/* input-group-btn làm thg btn với input nhìn giống dính nhau đẹp */}
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{padding:0 }}>>
            <span className="input-group-btn">
              <button type="button" className="btn btn-info" onClick={this.onSearch} >
                <span className="fa fa-search">
                </span>
                Tìm</button>
            </span>
          </div>
        </div>
        )
    }

}

const mapStateToProps=(state)=>{
  return{
    
  }
}
const mapStateToDispatch=(dispatch,props)=>{
  return{
    onSearch:(keyword)=>{
      dispatch(actions.search(keyword))  
    }
  }
}
export default connect(mapStateToProps,mapStateToDispatch)(Search)