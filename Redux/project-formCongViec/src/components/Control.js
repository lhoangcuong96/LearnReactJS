import React,{Component} from 'react'
import Search from './Search'
import Sort from './Sort'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class Control extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return( 
        <div className="row">
            {/* input group btn fontsize=0 => nếu cần phải gọi lại font  */}
            <div className="input-group-btn clearfix" style={{zIndex:3 }}>
              <div className=" col-xs-8  col-sm-8 col-lg-8 col-md-8" >
                  {/* Search  */}
                  <Search
                    onSearch={this.props.onSearch}
                  />
                  {/* End Search */}
              </div>
              <div className=" col-xs-2  col-sm-2 col-lg-2 col-md-2" >
                  {/* Sort */}
                <Sort
                  onSort={this.props.onSort}
                />
                  {/* End Sort */}
              </div>
              <div style={{clear:"both"}}></div>
            </div>
        </div>
        )
    }
}

export default connect()(Control)